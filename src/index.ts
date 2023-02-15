
//valid if date is in toISOString() format
export const isValidIsoDate = (date: string | undefined): boolean => {
  if (!date) return false;
  try{
    const dateObj = new Date(date);
    return dateObj.toISOString() === date;
  }catch (e) {
    return false;
  }
}
