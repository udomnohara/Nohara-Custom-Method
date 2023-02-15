// valid if date is in toISOString() format
export const isValidIsoDate = (date: string | undefined): boolean => {
  if (!date) return false;
  try{
    const dateObj = new Date(date);
    return dateObj.toISOString() === date;
  }catch (e) {
    return false;
  }
}

/**
 * space string in every n digit
 * @param input string to be spaced
 * @param n number of digit
 * @param isSkipLastNPlusOneDigit if true, it will skip last n+1 digit
 * @returns spaced string
 * @example
 * 1234567890 => 123 456 789 0 (n = 3, isSkipLastNPlusOneDigit = false) or 123 456 7890 (n = 3, isSkipLastNPlusOneDigit = true)
 */
export function spaceNumberEveryNDigit(
  input: string,
  n: number,
  isSkipLastNPlusOneDigit = false
) {
  if (!n) return "";
  const numberArray = input.split("");
  const result: string[] = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (isSkipLastNPlusOneDigit) {
      if (i % n === 0 && i !== 0 && i !== numberArray.length - 1) {
        result.push(" ");
      }
    } else {
      if (i % n === 0 && i !== 0) {
        result.push(" ");
      }
    }
    result.push(numberArray[i]);
  }
  return result.join("");
}
