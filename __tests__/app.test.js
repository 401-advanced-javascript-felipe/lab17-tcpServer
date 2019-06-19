'use strict';

const alter = require('../src/alter');

jest.mock('fs');

describe('toUpper()', () => {
  it('should return a string uppercased', () => {
    let str = 'hello';
    str = alter.toUpper(str);
    expect(str).toBe('HELLO');
  });
});