// Friendly Date Ranges
// Implement a way of converting two dates into a more friendly date range that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range should be displayed
// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be ommitted.
// Input date is formatted as YYYY-MM-DD

function friendly(range) {
  var today = new Date();
  var thisYear = today.getFullYear();
  return range.map(function(date) {
    date = date.split('-');
    return {
      'year': date[0],
      'month': parseMonth(date[1]),
      'day': parseDay(date[2])
    }
  })
  .reduce(function(start, end) {
    if (start.year == end.year) {
      delete start.year;
      if (thisYear == start.year) {
        delete end.year;
      }
      if (start.month == end.month) {
        delete end.month;
        if (start.day == end.day) {
          delete end.day;
        }
      }
    } else if (thisYear == start.year &&
        start.month == 'December' &&
        start.year == end.year + 1) {
      // remove start year
      delete start.year;
      delete end.year;
    }
    return [start, end];
  });

  function parseMonth(month) {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return months[parseInt(month) - 1];
  }

  function parseDay(day) {
    day = parseInt(day);
    if (day === 1 || day === 21 || day === 31) {
      return day + 'st';
    } else if (day === 2 || day === 22) {
      return day + 'nd';
    } else if (day === 3 || day === 23) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }
}

console.log(friendly(['2015-07-01', '2015-07-04']));
console.log(friendly(['2015-07-01', '2017-07-04']));
