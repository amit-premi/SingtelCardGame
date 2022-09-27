import {StyleSheet} from 'react-native';
import {APP_STYLE_CONSTANTS} from '../../style/AppStyles';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerLabelRestart: {
    color: APP_STYLE_CONSTANTS.CARD_DEFAULT_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerLabelSteps: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
