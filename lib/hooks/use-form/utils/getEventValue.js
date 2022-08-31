var getEventValue = function (event) {
    if (event.target.type === "checkbox") {
        return event.currentTarget.checked;
    }
    return event.currentTarget.value;
};
export default getEventValue;
//# sourceMappingURL=getEventValue.js.map