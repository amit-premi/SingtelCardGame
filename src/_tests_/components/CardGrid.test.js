import React from 'react';
import {mount} from 'enzyme';
import {Alert} from 'react-native';
import {Card} from '../../components/card';
import {TouchableOpacity} from 'react-native';
import {randomNumArrayGenerator} from '../../utils';
import {CardGrid} from '../../components/cardGrid';
import {HeaderView} from '../../components/headerView';

jest.mock('../../utils/randomNumArrayGenerator', () => ({
  randomNumArrayGenerator: jest
    .fn()
    .mockImplementation(() => [15, 40, 75, 40, 75, 15]),
}));

describe('CardGrid', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  jest.spyOn(Alert, 'alert');

  it('should render the card grid component', () => {
    const wrapper = mount(<CardGrid />);
    expect(wrapper.find(Card)).toHaveLength(6);
  });

  it('should reset all the cards', () => {
    const wrapper = mount(<CardGrid />);
    wrapper
      .find(HeaderView)
      .at(0)
      .find(TouchableOpacity)
      .at(0)
      .simulate('click');
    expect(randomNumArrayGenerator).toHaveBeenCalledTimes(1);
  });

  it('should display the game completion alert', () => {
    const wrapper = mount(<CardGrid />);
    const cards = wrapper.find(Card);

    cards.at(0).simulate('click');
    cards.at(5).simulate('click');
    cards.at(2).simulate('click');
    cards.at(4).simulate('click');
    cards.at(1).simulate('click');
    cards.at(3).simulate('click');

    expect(Alert.alert).toHaveBeenCalledTimes(1);
  });
});
