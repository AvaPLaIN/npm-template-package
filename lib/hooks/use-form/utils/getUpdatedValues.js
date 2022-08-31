import set from "lodash/set";
var getUpdatedValues = function (object, id, appendObject) {
    var updatedObject = structuredClone(object);
    set(updatedObject, id, appendObject);
    return updatedObject;
};
export default getUpdatedValues;
//# sourceMappingURL=getUpdatedValues.js.map