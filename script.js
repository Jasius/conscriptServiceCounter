const timeSheets = (currentDate, serviceEndDate) => {
  let b = moment([2020, 03, 14]),
    timeTable = `Conscript service ends in
${serviceEndDate.diff(currentDate, "months")} months</br>
or</br>
${serviceEndDate.diff(currentDate, "weeks")} weeks</br>
or</br>
${serviceEndDate.diff(currentDate, "days")} days</br>
or </br>
${serviceEndDate.diff(currentDate, "hours")} hours</br>
or</br>
${serviceEndDate.diff(currentDate, "minutes")} minutes</br>
or</br>
${serviceEndDate.diff(currentDate, "seconds")} seconds
`;
  return (document.getElementById("timesheetDiv").innerHTML = timeTable);
};
setInterval(function() {
  timeSheets(moment(), moment([2020, 03, 14]));
}, 1000);

  function diffYMDHMS(date1, date2) {

   let years = date1.diff(date2, 'year');
   date2.add(years, 'years');

   let months = date1.diff(date2, 'months');
   date2.add(months, 'months');

   let days = date1.diff(date2, 'days');
   date2.add(days, 'days');

   let hours = date1.diff(date2, 'hours');
   date2.add(hours, 'hours');

   let minutes = date1.diff(date2, 'minutes');
   date2.add(minutes, 'minutes');

   let seconds = date1.diff(date2, 'seconds');

   console.info(`${years} years ${months} months ${days}   days  ${hours}   
     ${hours}   minutes
     ${minutes}   seconds
     ${seconds}`)

   return {
     years,
     months,
     days,
     hours,
     minutes,
     seconds
   };
 }

 console.info(diffYMDHMS( moment([2020, 03, 14]), moment()))