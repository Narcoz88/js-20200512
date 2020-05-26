/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let set = new Set();
    const newArr = [];
    arr.forEach((item) => {
        set.add(item);
    });
    for (let item of set) {
        newArr.push(item);
    }
    return newArr;
}
