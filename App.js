/**
 * A simple card game for Singtel sample project
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {CardGrid} from './src/components/cardGrid';

import {StyleSheet, SafeAreaView} from 'react-native';
import {APP_STYLE_CONSTANTS} from './src/style/AppStyles';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CardGrid />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_STYLE_CONSTANTS.APP_MAIN_CONTAINER_BG_COLOR,
  },
});

export default App;
