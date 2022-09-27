import React from 'react';
import {mount} from 'enzyme';
import {HeaderView} from '../../components/headerView';
import {TouchableOpacity, Text} from 'react-native';

describe('HeaderView', () => {
  it('should render the header view displaying the restart and steps count text', () => {
    const wrapper = mount(
      <HeaderView stepCount={9} cardResetListener={jest.fn()} />,
    );

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(2);
    expect(wrapper.find(Text).at(1).children().text()).toEqual('STEPS: 9');
  });
});
