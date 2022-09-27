/**
 * Component used for header view displaying the restart & steps count
 */

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {APP_CONSTANTS} from '../../constants/AppConstants';

const HeaderView = ({stepCount, cardResetListener}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={cardResetListener}>
        <Text style={styles.headerLabelRestart}>
          {APP_CONSTANTS.LABEL_RESTART}
        </Text>
      </TouchableOpacity>
      <Text
        style={
          styles.headerLabelSteps
        }>{`${APP_CONSTANTS.LABEL_STEPS}${stepCount}`}</Text>
    </View>
  );
};

export default HeaderView;
