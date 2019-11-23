import { GalacticAge } from './../src/galacticAge.js';

describe('GalacticAge', () => {
  test('should correctly return the Earth age that is given', () => {
    let age = new GalacticAge(5);
    expect(age.earthAge).toEqual(5);
  });
  test('should correctly return Mercury age', () => {
    let age = new GalacticAge(24);
    expect(age.mercuryAge).toEqual(100);
  });
  test('should correctly return Venus age', () => {
    let age = new GalacticAge(62);
    expect(age.venusAge).toEqual(100);
  });
  test('should correctly return Mars age', () => {
    let age = new GalacticAge(188);
    expect(age.marsAge).toEqual(100);
  });
  test('should correctly return Jupiter age', () => {
    let age = new GalacticAge(1186);
    expect(age.jupiterAge).toEqual(100);
  });
  test('should correctly return time left on Earth when positive', () => {
    let age = new GalacticAge(90);
    expect(age.earthLeft()).toEqual('You outlived expectations by 10 years');
  });
  test('should correctly return time left on Earth when negative', () => {
    let age = new GalacticAge(82);
    expect(age.earthLeft()).toEqual(`You outlived expectations by 2 years`);
  });
  test('should correctly return time left on Mercury when positive', () => {
    let age = new GalacticAge(50);
    expect(age.mercuryLeft()).toEqual(125);
  });
  test('should correctly return time left on Mercury when negative', () => {
    let age = new GalacticAge(100);
    expect(age.mercuryLeft()).toEqual(`You outlived expectations by about 83 years`);
  });
  test('should correctly return time left on Venus when positive', () => {
    let age = new GalacticAge(50);
    expect(age.venusLeft()).toEqual(48);
  });
  test('should correctly return time left on Venus when negative', () => {
    let age = new GalacticAge(100);
    expect(age.venusLeft()).toEqual("You outlived expectations by about 32 years");
  });
  test('should correctly return time left on Mars when positive', () => {
    let age = new GalacticAge(50);
    expect(age.marsLeft()).toEqual(16);
  });
  test('should correctly return time left on Mars when negative', () => {
    let age = new GalacticAge(100);
    expect(age.marsLeft()).toEqual("You outlived expectations by about 11 years");
  });
  test('should correctly return time left on Jupiter when positive', () => {
    let age = new GalacticAge(50);
    expect(age.jupiterLeft()).toEqual(3);
  });
  test('should correctly return time left on Jupiter when negative', () => {
    let age = new GalacticAge(100);
    expect(age.jupiterLeft()).toEqual("You outlived expectations by about 2 years");
  });
});
