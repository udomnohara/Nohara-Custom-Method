//valid if date is in toISOString() format
export var isValidIsoDate = function (date) {
    if (!date)
        return false;
    try {
        var dateObj = new Date(date);
        return dateObj.toISOString() === date;
    }
    catch (e) {
        return false;
    }
};
