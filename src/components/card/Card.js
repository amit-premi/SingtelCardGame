/**
 * Component creates a single Cards & it's corresponding definitions
 *
 */

import React, {useRef, useEffect} from 'react';
import {Animated, TouchableOpacity, Text} from 'react-native';
import {APP_CONSTANTS} from '../../constants/AppConstants';
import {
  animFlipToBack,
  animFlipToFront,
  rotateBackAnimationStyle,
  rotateFrontAnimationStyle,
} from '../../utils/anim';
import styles from './styles';

const renderProp = ({isPaired: prevPaired}, {isPaired: currPaired}) =>
  currPaired && prevPaired;

const Card = React.memo(
  ({
    cardId,
    cardValue,
    flipCard,
    reset,
    isPaired,
    lastCard: {value, refValue: prevRef},
  }) => {
    let flipValue = 0;
    const refValue = useRef(new Animated.Value(0)).current;
    refValue.addListener(({itemValue}) => (flipValue = itemValue));

    useEffect(() => {
      animFlipToBack(refValue);
    }, [reset]);

    const onPress = ({num}) => {
      if (isPaired) {
        return;
      }

      const matched = !value || value === num;

      flipCard({num, refValue, matched});
      !!flipValue ? animFlipToBack(refValue) : animFlipToFront(refValue);

      if (matched) {
        return;
      }

      setTimeout(() => {
        prevRef && animFlipToBack(prevRef);
        animFlipToBack(refValue);
      }, 1000);
    };

    return (
      <TouchableOpacity key={cardId} onPress={() => onPress({num: cardValue})}>
        <Animated.View
          style={[
            styles.defaultCardStyle,
            rotateFrontAnimationStyle(refValue),
          ]}>
          <Text style={styles.defaultTextFont}>
            {APP_CONSTANTS.LABEL_UNKNOWN}
          </Text>
        </Animated.View>
        <Animated.View
          style={[styles.flippedCardStyle, rotateBackAnimationStyle(refValue)]}>
          <Text style={styles.flippedTextFont}>{cardValue}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  },
  renderProp,
);

export default Card;
