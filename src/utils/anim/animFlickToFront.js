import {Animated} from 'react-native';

export const animFlipToFront = animate =>
  Animated.timing(animate, {
    toValue: 180,
    duration: 300,
    useNativeDriver: true,
  }).start();
