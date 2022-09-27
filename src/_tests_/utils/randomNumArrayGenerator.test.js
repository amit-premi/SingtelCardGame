import {randomNumArrayGenerator} from '../../utils';

describe('randomNumArrayGenerator', () => {
  it('should generate an array of random numbers', () => {
    const floor = jest.spyOn(Math, 'floor');
    const random = jest.spyOn(Math, 'random');

    expect(randomNumArrayGenerator(12)).toHaveLength(12);
    expect(random).toHaveBeenCalled();
    expect(floor).toHaveBeenCalled();
  });
});
