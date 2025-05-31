import React from 'react';
import renderer, {
  ReactTestRendererJSON,
  ReactTestRenderer,
  act,
} from 'react-test-renderer';
import { Platform } from 'react-native';

// Import the components directly for testing
import WebAdNative from '../WebAd'; // This will be WebAd.tsx
import WebAdWeb from '../WebAd.web'; // This will be WebAd.web.tsx

// Global type for adsbygoogle for tests - keeping it simple to avoid conflicts
declare global {
  interface Window {
    adsbygoogle?: any[]; // AdSense initializes this as an array
  }
}

describe('WebAd (Native)', () => {
  const originalPlatformOS = Platform.OS;

  afterEach(() => {
    Platform.OS = originalPlatformOS;
  });

  it('should render null on native platforms', () => {
    Platform.OS = 'android';
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;
    act(() => {
      tree = renderer.create(<WebAdNative />).toJSON();
    });
    expect(tree).toBeNull();
    Platform.OS = originalPlatformOS; // Restore immediately after setting for the test
  });
});

describe('WebAd (Web)', () => {
  let originalAdsByGoogle: any[] | undefined;
  const originalPlatformOS = Platform.OS;
  let pushSpy: jest.SpyInstance | undefined;

  beforeEach(() => {
    originalAdsByGoogle = window.adsbygoogle;
    Platform.OS = 'web';

    if (!window.adsbygoogle || !Array.isArray(window.adsbygoogle)) {
      window.adsbygoogle = [];
    }
    pushSpy = jest.spyOn(window.adsbygoogle, 'push');
  });

  afterEach(() => {
    pushSpy?.mockRestore();
    pushSpy = undefined;
    window.adsbygoogle = originalAdsByGoogle;
    Platform.OS = originalPlatformOS;
  });

  it('should call adsbygoogle.push on web', () => {
    act(() => {
      renderer.create(<WebAdWeb />);
    });
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith({});
  });

  it('should render a View containing an ins-like structure for the ad on web', () => {
    let testRenderer: ReactTestRenderer | undefined;
    act(() => {
      testRenderer = renderer.create(<WebAdWeb />);
    });

    const tree = testRenderer ? testRenderer.toJSON() : null;

    expect(tree).toBeTruthy();

    if (tree && !Array.isArray(tree)) {
      const singleTree = tree as ReactTestRendererJSON;
      expect(singleTree.type).toBe('View');
      expect(singleTree.children).toHaveLength(1);

      if (singleTree.children && singleTree.children.length > 0) {
        const insElement = singleTree.children[0] as ReactTestRendererJSON;
        expect(insElement.type).toBe('ins');
        expect(insElement.props.className).toBe('adsbygoogle');
        expect(insElement.props['data-ad-client']).toBe(
          'ca-pub-5266987079964279',
        );
        expect(insElement.props['data-ad-slot']).toBe('2268797420');
      } else {
        throw new Error('Expected ins element as a child of View');
      }
    } else {
      throw new Error(
        `Expected a single root element from WebAdWeb render, but got: ${JSON.stringify(
          tree,
        )}`,
      );
    }
  });
});
