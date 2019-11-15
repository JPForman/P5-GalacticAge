import { GalacticAge } from './../src/galacticAge.js';

describe('GalacticAge', () => {
  test('should correctly return the Earth age that is given', () => {
    let age = new GalacticAge(5);
    expect(age.earthAge).toEqual(5);
  });
  test('should correctly return Mercury age', () => {
    let age = new GalacticAge(100);
    expect(age.mercuryAge).toEqual(24);
  });
  test('should correctly return Venus age', () => {
    let age = new GalacticAge(100);
    expect(age.venusAge).toEqual(62);
  });
  test('should correctly return Mars age', () => {
    let age = new GalacticAge(100);
    expect(age.marsAge).toEqual(188);
  });
  test('should correctly return Jupiter age', () => {
    let age = new GalacticAge(100);
    expect(age.jupiterAge).toEqual(1186);
  });
  test('should correctly return time left on Earth when positive', () => {
    let age = new GalacticAge(50);
    expect(age.earthLeft()).toEqual(30);
  });
  test('should correctly return time left on Earth when negative', () => {
    let age = new GalacticAge(82);
    expect(age.earthLeft()).toEqual(`You outlived expectations by 2 years`);
  });
  test('should correctly return time left on Mercury', () => {
    let age = new GalacticAge(100);
    expect(age.mercuryLeft()).toEqual(80.8);
  });
});
