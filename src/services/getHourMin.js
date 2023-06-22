function getHourMin(timestamp) {
  const hour = new Date(timestamp * 1000).getHours();
  const min = new Date(timestamp * 1000).getMinutes();

  return {
    hour: hour < 10 ? "0" + hour : hour,
    min: min < 10 ? "0" + min : min,
  };
}

export { getHourMin };
