import { isValidIsoDate } from '../src';
import { assert } from 'chai';
import { describe, it } from "mocha";
//using mocha testing framework

//testing isValidIsoDate
describe('My test', () => {
  it('isValidIsoDate', () => {
    assert.isFalse(isValidIsoDate(''))
    assert.isFalse(isValidIsoDate(undefined))
    assert.isTrue(isValidIsoDate('2020-10-15T00:00:00.000Z'))
  })
})

