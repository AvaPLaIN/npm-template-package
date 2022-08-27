const getEventValue = (event: React.ChangeEvent<any>) => {
  if (event.target.type === "checkbox") {
    return event.currentTarget.checked;
  }
  return event.currentTarget.value;
};

export default getEventValue;
