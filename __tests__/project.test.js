import { GalacticAge } from './../src/galacticAge.js';

describe('GalacticAge', () => {
  test('should correctly return the Earth age that is given', () => {
    let age = new GalacticAge(5);
    console.log(age);
    expect(age.earthAge).toEqual(5);
  });
  test('should correctly return Mercury age', () => {
    let age = new GalacticAge(100);
    expect(age.mercuryAge).toEqual(5);
  });
});
