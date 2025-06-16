const assert = require('node:assert');
const { describe, it } = require('node:test');
const { isLeapYear, getAugustanMonthIndex } = require('../calendar');

describe('isLeapYear', () => {
  it('identifies leap years', () => {
    assert.strictEqual(isLeapYear(2000), true);
    assert.strictEqual(isLeapYear(2004), true);
  });

  it('identifies common years', () => {
    assert.strictEqual(isLeapYear(1900), false);
    assert.strictEqual(isLeapYear(2001), false);
  });
});

describe('getAugustanMonthIndex', () => {
  it('returns 0 for the start of the Augustan year', () => {
    assert.strictEqual(getAugustanMonthIndex(new Date('2023-12-27')), 0);
  });

  it('returns 1 forty days after the start', () => {
    assert.strictEqual(getAugustanMonthIndex(new Date('2024-02-05')), 1);
  });

  it('returns 7 for October 31, 2024', () => {
    assert.strictEqual(getAugustanMonthIndex(new Date('2024-10-31')), 7);
  });
});
