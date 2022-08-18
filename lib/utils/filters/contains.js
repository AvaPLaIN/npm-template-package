var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var filterByContains = function (array, filterValue, filterId) {
    var copyArray = __spreadArray([], array, true);
    var filteredData = copyArray.filter(function (item) {
        var itemValue = item[filterId].toString();
        return itemValue.toLowerCase().includes(filterValue.toLowerCase());
    });
    return filteredData;
};
export default filterByContains;
//# sourceMappingURL=contains.js.map