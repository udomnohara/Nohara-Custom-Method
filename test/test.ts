import { isValidIsoDate, spaceNumberEveryNDigit } from '../src';
import { assert } from 'chai';
import { describe, it } from "mocha";
// using mocha testing framework

describe('My test', () => {
// test isValidIsoDate
  it('isValidIsoDate', () => {
    assert.isFalse(isValidIsoDate(''))
    assert.isFalse(isValidIsoDate(undefined))
    assert.isFalse(isValidIsoDate('2020-10-15'))
    assert.isTrue(isValidIsoDate('2020-10-15T00:00:00.000Z'))
  })
})

