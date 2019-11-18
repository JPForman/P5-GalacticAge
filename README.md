# _Super Galactic Age Calculator_

#### A website to convert any earth age into different planetary ages.

###### By Joshua Forman

## Description

_This website is developed to allow the user to input their age, then return their age on different planets. The program will also return the estimated time remaining for their life, based on an 80 year old life expectancy._



## Specs

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
test('should correctly return time left on Mercury when positive', () => {
  let age = new GalacticAge(50);
  expect(age.mercuryLeft()).toEqual(7);
});
test('should correctly return time left on Mercury when negative', () => {
  let age = new GalacticAge(100);
  expect(age.mercuryLeft()).toEqual(`You outlived expectations by about 5 years`);
});
test('should correctly return time left on Venus when positive', () => {
  let age = new GalacticAge(50);
  expect(age.venusLeft()).toEqual(19);
});
test('should correctly return time left on Venus when negative', () => {
  let age = new GalacticAge(100);
  expect(age.venusLeft()).toEqual("You outlived expectations by about 12 years");
});
test('should correctly return time left on Mars when positive', () => {
  let age = new GalacticAge(50);
  expect(age.marsLeft()).toEqual(56);
});
test('should correctly return time left on Mars when negative', () => {
  let age = new GalacticAge(100);
  expect(age.marsLeft()).toEqual("You outlived expectations by about 38 years");
});
test('should correctly return time left on Jupiter when positive', () => {
  let age = new GalacticAge(40);
  expect(age.jupiterLeft()).toEqual(474);
});
test('should correctly return time left on Jupiter when negative', () => {
  let age = new GalacticAge(100);
  expect(age.jupiterLeft()).toEqual("You outlived expectations by about 237 years");
});



## Setup

* _Clone_
* _npm install_
* _npm start for local host_

or

* _go to https://github.com/JPForman/P5-GalacticAge.git

## Known Bugs

_GUI needs a lot of improvement_

## Support and contact details

_Email: [cyborgforman@gmail.com](mailto:cyborgforman@gmail.com)_

## Technologies Used

_HTML, Bootstrap, CSS, js, lint, Webpack, jest_

### License

*MIT*

Copyright (c) 2019 **_Joshua Forman_**
