/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const newArr = Object.keys(obj);
    const result = {};
    newArr.forEach((item, index, arr) => {
        if (arr[index] !== fields[index]) {
            return result[item] = item;
        }
    });
    return result;
};
