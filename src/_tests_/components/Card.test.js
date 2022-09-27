import React from 'react';
import {mount} from 'enzyme';
import {Card} from '../../components/card';
import {TouchableOpacity} from 'react-native';
import {animFlipToBack} from '../../utils/anim';

jest.mock('../../utils/anim/animFlipToBack', () => ({
  animFlipToBack: jest.fn(),
}));

jest.mock('../../utils/anim/animFlickToFront', () => ({
  animFlipToFront: jest.fn(),
}));

const flipCardMock = jest.fn();
jest.useFakeTimers();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(() => ({
    current: {
      addListener: () => {},
      interpolate: () => {},
    },
  })),
}));

const useEffectSpy = jest.spyOn(React, 'useEffect');

const cardProps = {
  cardId: 'test',
  cardValue: 25,
  isPaired: false,
  reset: 0,
  flipCard: flipCardMock,
  lastCard: {value: null, ref: null},
};

describe('Card', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the card component', () => {
    const wrapper = mount(<Card {...cardProps} />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it('should perform card flip on click event', () => {
    const wrapper = mount(<Card {...cardProps} />);
    wrapper.find(TouchableOpacity).at(0).simulate('click');

    expect(flipCardMock).toHaveBeenCalledWith({
      num: 25,
      ref: {
        addListener: expect.any(Function),
        interpolate: expect.any(Function),
      },
      matched: true,
    });
  });

  it('should flip back to default state, when both selected cards are different', () => {
    const wrapper = mount(
      <Card {...cardProps} lastCard={{value: 35, ref: 90}} />,
    );
    wrapper.find(TouchableOpacity).at(0).simulate('click');

    jest.advanceTimersByTime(500);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(animFlipToBack).toHaveBeenCalledTimes(3);
  });

  it('should not render the already paired card', () => {
    const wrapper = mount(<Card {...cardProps} isPaired />);
    wrapper.setCardProps({isPaired: true});

    expect(useEffectSpy).toHaveBeenCalledTimes(0);
  });

  it('should not perform card flick for already paired card', () => {
    const wrapper = mount(<Card {...cardProps} isPaired />);
    wrapper.find(TouchableOpacity).at(0).simulate('click');

    expect(flipCardMock).toHaveBeenCalledTimes(0);
  });
});
