/**
 * @file 
 * Utilities
 *
 * Some functions required for the API and communication error handling
 */

class Utils {
    static emptyObject(object) {
        return object === null || (Object.entries(object).length === 0 && object.constructor === Object);
    }

    static objectToQueryParams(object, pairSeparator = "=", groupSeparator = "&") {
        return Object.entries(object).map(([key, value]) => key + pairSeparator + value).join(groupSeparator);
    }

    static validIdentificator(id) {
        const number = parseInt(id);
        return Number.isInteger(id) && id > 0;
    }
}

export default Utils;
