import {StyleSheet} from 'react-native';
import {APP_STYLE_CONSTANTS} from '../../style/AppStyles';

const styles = StyleSheet.create({
  defaultCardStyle: {
    width: 118,
    height: 175,
    marginBottom: 8,
    borderWidth: 3,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: APP_STYLE_CONSTANTS.CARD_DEFAULT_COLOR,
    borderColor: APP_STYLE_CONSTANTS.CARD_BORDER_COLOR,
  },
  flippedCardStyle: {
    width: 118,
    height: 175,
    top: 0,
    marginBottom: 8,
    borderWidth: 3,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    backgroundColor: APP_STYLE_CONSTANTS.CARD_FLIPPED_COLOR,
    borderColor: APP_STYLE_CONSTANTS.CARD_BORDER_COLOR,
  },
  defaultTextFont: {
    fontSize: 32,
    fontWeight: 'bold',
    color: APP_STYLE_CONSTANTS.TEXT_CARD_DEFAULT_COLOR,
  },
  flippedTextFont: {
    fontSize: 24,
    fontWeight: '400',
    color: APP_STYLE_CONSTANTS.TEXT_CARD_FLIPPED_COLOR,
  },
});

export default styles;
