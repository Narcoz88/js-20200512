/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    function asc(a, b) {
        return a.localeCompare(b, ["ru", "en"], {caseFirst: "upper"});
    }
    function desc(a, b) {
        return -a.localeCompare(b, ["ru", "en"], {caseFirst: "upper"});
    }
    if (param === "asc") {
        return arr.sort(asc);
    } else if (param === "desc") {
        return arr.sort(desc);
    }
}