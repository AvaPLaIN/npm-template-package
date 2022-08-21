var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var filterByLessThanOrEqual = function (array, filterValue, filterId) {
    var copyArray = __spreadArray([], array, true);
    var filteredData = copyArray.filter(function (item) {
        var itemValue = parseInt(item[filterId], 10);
        return itemValue <= filterValue;
    });
    return filteredData;
};
export default filterByLessThanOrEqual;
//# sourceMappingURL=lessThanOrEqual.js.map