// Friendly Date Ranges
// Implement a way of converting two dates into a more friendly date range that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range should be displayed
// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be ommitted.
// Input date is formatted as YYYY-MM-DD

function friendly(range) {
  var dates = range.map(function(date) {
    date = date.split('-');
    return {
      'year': date[0],
      'month': parseMonth(date[1]),
      'day': parseDay(date[2])
    }
  });
  var startDate = dates[0];
  var endDate = dates[1];

  function parseMonth(month) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[parseInt(month[1]) - 1];
  }

  function parseDay(day) {
    day = parseInt(day);
    if (day === 1 ||
        day === 21 ||
        day === 31) {
      return day + 'st';
    } else if (day === 2 || day === 22) {
      return day + 'nd';
    } else if (day === 3 || day === 23) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }
  return dates.map(function(date) {
    return date.month + ' ' + date.day + ' ' + date.year;
  });
}

console.log(friendly(['2015-07-01', '2015-07-04']));
