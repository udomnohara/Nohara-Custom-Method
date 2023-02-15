import { isValidIsoDate } from '../index';
// test case for isValidIsoDate function
describe('isValidIsoDate', () => {
  it('should return false if date is undefined', () => {
    expect(isValidIsoDate(undefined)).toBe(false);
  });
  it('should return false if date is empty string', () => {
    expect(isValidIsoDate('')).toBe(false);
  });
  it('should return false if date is invalid format', () => {
    expect(isValidIsoDate('2020-01-32')).toBe(false);
  });
  it('should return true if date is valid format', () => {
    expect(isValidIsoDate('2011-10-05T14:48:00.000Z')).toBe(true);
  });
})
