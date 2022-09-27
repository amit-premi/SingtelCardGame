import {StyleSheet, Platform} from 'react-native';
import {APP_STYLE_CONSTANTS} from '../../style/AppStyles';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor:
      Platform.OS === 'ios'
        ? ''
        : APP_STYLE_CONSTANTS.APP_MAIN_CONTAINER_BG_COLOR,
    paddingTop: Platform.OS === 'ios' ? 0 : 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
