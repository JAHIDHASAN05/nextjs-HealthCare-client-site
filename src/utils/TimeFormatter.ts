const TimeFormatter = (time:string) => {
  const date = new Date(time);
  const hours = (date.getHours() + 1).toString().padStart(2, "0");;
  const minutes = (date.getMonth() + 1).toString().padStart(2, "0");


  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};

export default TimeFormatter;
