// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { test } = require('@jest/globals');
// TODO - Part 2

//isPhoneNumber tests
test('passing phone number 1', () => {
    expect(functions.isPhoneNumber('626-484-1234')).toBe(true);
});
test('passing phone number 2', () => {
    expect(functions.isPhoneNumber('123-457-7891')).toBe(true);
});
test('failing phone number 1', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
});
test('failing phone number 2', () => {
    expect(functions.isPhoneNumber('not a phone number')).toBe(false);
});

//isEmail tests
test('passing email 1', () => {
    expect(functions.isEmail('rtlabuguen@gmail.com')).toBe(true);
});
test('passing email 2', () => {
    expect(functions.isEmail('ucsdPrincipal@gmail.com')).toBe(true);
});
test('failing email 1', () => {
    expect(functions.isEmail('not an email dummy')).toBe(false);
});
test('failing email 2', () => {
    expect(functions.isEmail('@royce.comLabuguen')).toBe(false);
});

//isStrongPassword tests
test('passing password 1', () => {
    expect(functions.isStrongPassword('valid_1234')).toBe(true);
});
test('passing password 2', () => {
    expect(functions.isStrongPassword('thisPassword_1')).toBe(true);
});
test('failing password 1', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
test('failing password 2', () => {
    expect(functions.isStrongPassword('SuperLongPasswordBroHellYeah')).toBe(false);
});

//isDate tests
test('passing date 1' , () => {
    expect(functions.isDate('01/12/1999')).toBe(true);
});
test('passing date 2', () => {
    expect(functions.isDate('9/16/1999')).toBe(true);
});
test('failing date 1', () => {
    expect(functions.isDate('1/1/09')).toBe(false);
})
test('failing date 2', () => {
    expect(functions.isDate('123/16/1999')).toBe(false);
});

//isHexColor tests
test('passing color 1', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});
test('passing color 2', () => {
    expect(functions.isHexColor('FC0')).toBe(true);
});
test('failing color 1', () => {
    expect(functions.isHexColor('blue')).toBe(false);
});
test('failing color 2', () => {
    expect(functions.isHexColor('AAAA')).toBe(false);
});