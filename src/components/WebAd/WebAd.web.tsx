import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

const AD_CLIENT = 'ca-pub-5266987079964279';
const AD_SLOT = '2268797420';

const styles = StyleSheet.create({
  adContainer: {
    width: '100%',
    minHeight: 50, // Minimum height for the ad container
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 8,
    alignSelf: 'center',
    textAlign: 'center',
    // backgroundColor: 'rgba(0,0,0,0.05)', // Optional: for debugging layout
  },
});

// Extend the Window interface to include adsbygoogle
declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

const WebAd: React.FC = () => {
  useEffect(() => {
    // The main adsbygoogle.js script is now loaded globally via preview-body.html
    // We still need to push an ad request for this specific ad unit.
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense push error:', e);
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  const adStyle = useMemo(() => ({ display: 'block', width: '100%' }), []);

  // Render the ad unit container and the <ins> tag for the ad
  return (
    <View style={styles.adContainer}>
      {/* AdSense ad unit: react-native-flex-grid-center-1 */}
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
        key={`${AD_CLIENT}-${AD_SLOT}`}
      />
    </View>
  );
};

export default WebAd;
