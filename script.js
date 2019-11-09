function fullDateDiff(serviceEndDate, currentDate) {
  const years = serviceEndDate.diff(currentDate, 'year');
  currentDate.add(years, 'years');
  const months = serviceEndDate.diff(currentDate, 'months');
  currentDate.add(months, 'months');
  const days = serviceEndDate.diff(currentDate, 'days');
  currentDate.add(days, 'days');
  const hours = serviceEndDate.diff(currentDate, 'hours');
  currentDate.add(hours, 'hours');
  const minutes = serviceEndDate.diff(currentDate, 'minutes');
  currentDate.add(minutes, 'minutes');
  const seconds = serviceEndDate.diff(currentDate, 'seconds');
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

let prepDate = fullDateDiff(moment([2020, 03, 14]), moment());
setInterval(function () {
  timeSheets(moment(), moment([2020, 03, 14]));
  prepDate = fullDateDiff(moment([2020, 03, 14]), moment());
}, 1000);

const timeSheets = (currentDate, serviceEndDate) => {
  timeTable = `Conscript service ends in
${prepDate.months} months ${prepDate.days} days ${prepDate.hours} hours ${prepDate.minutes} minutes ${prepDate.seconds} seconds</br>
or</br>
${serviceEndDate.diff(currentDate, "weeks")} weeks</br>
or</br>
${serviceEndDate.diff(currentDate, "days")} days
`;
  return document.getElementById("timesheetDiv").innerHTML = timeTable;
};