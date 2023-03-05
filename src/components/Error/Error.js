import React from 'react';
import LottieView from 'lottie-react-native';

function Error() {
  return (
    <LottieView
      source={require('../../assets/error.json')}
      autoPlay
      loop={false}
      speed={0.3}
    />
  );
}

export default Error;
