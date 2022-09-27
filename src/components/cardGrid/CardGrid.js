/**
 * Component displays the Cards arranged in grid form of 3X4 view & it's corresponding definitions
 *
 */

import React, {useState, useEffect, useCallback} from 'react';
import {View, Alert} from 'react-native';
import styles from './styles';
import {APP_CONSTANTS} from '../../constants/AppConstants';
import {Card} from '../card';
import {HeaderView} from '../headerView';
import {randomNumArrayGenerator} from '../../utils';

const cardsInitialState = {
  count: 0,
  paired: {},
  lastCard: {},
  reset: 0,
  cardNumbArray: randomNumArrayGenerator(APP_CONSTANTS.CARDS_COUNT_VALUE),
};

const CardGrid = () => {
  const [state, setState] = useState(cardsInitialState);

  useEffect(() => checkForGameCompletion(), [state.paired]);

  const resetCardsState = () =>
    setState({
      count: 0,
      paired: {},
      lastCard: {},
      reset: state.reset + 1,
      cardNumbArray: randomNumArrayGenerator(APP_CONSTANTS.CARDS_COUNT_VALUE),
    });

  const gameCompleteAlert = () => {
    Alert.alert(
      APP_CONSTANTS.ALERT_SUCCESS_TITLE,
      `${APP_CONSTANTS.ALERT_SUCCESS_MESSAGE}${state.count} steps!`,
      [
        {
          text: APP_CONSTANTS.ALERT_SUCCESS_BUTTON,
          onPress: resetCardsState,
        },
      ],
    );
  };

  const checkForGameCompletion = () => {
    const {paired, cardNumbArray} = state;

    if (cardNumbArray.length / 2 === Object.values(paired).length) {
      gameCompleteAlert();
    }
  };

  const flipCard = useCallback(
    ({num, refValue: currentRef, matched}) =>
      setState(prevState => {
        const {
          count,
          paired,
          lastCard: {value, refValue: prevRef},
        } = prevState;

        if (prevRef === currentRef) {
          return {...prevState, lastCard: {}, count: count + 1};
        }

        return {
          ...prevState,
          count: count + 1,
          paired: {...paired, ...(value && matched && {[num]: num})},
          lastCard: {
            refValue: value ? null : currentRef,
            ...(!value && {value: num}),
          },
        };
      }),
    [],
  );

  const {count, paired, lastCard, reset, cardNumbArray} = state;

  return (
    <View style={styles.rootContainer}>
      <HeaderView stepCount={count} cardResetListener={resetCardsState} />
      <View style={styles.container}>
        {cardNumbArray?.map((item, index) => (
          <Card
            key={index}
            cardId={index}
            cardValue={item}
            flipCard={flipCard}
            isPaired={!!paired[item]}
            reset={reset}
            lastCard={lastCard}
          />
        ))}
      </View>
    </View>
  );
};

export default CardGrid;
