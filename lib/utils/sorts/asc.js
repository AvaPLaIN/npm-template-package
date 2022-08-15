var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sortAsc = function (array, key) {
    var copyArray = __spreadArray([], array, true);
    var sortedData = copyArray.sort(function (a, b) {
        var aValue = a[key];
        var bValue = b[key];
        if (aValue < bValue)
            return -1;
        if (aValue > bValue)
            return 1;
        return 0;
    });
    return sortedData;
};
export default sortAsc;
//# sourceMappingURL=asc.js.map