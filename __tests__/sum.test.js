// sum.test.js

const { expect } = require("@jest/globals");
const sumFunc = require('../assets/scripts/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {

  expect(sumFunc.sum(1,2)).toBe(3);
});