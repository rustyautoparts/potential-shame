// Friendly Date Ranges
// Implement a way of converting two dates into a more friendly date range that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range should be displayed
// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be ommitted.
// Input date is formatted as YYYY-MM-DD

function friendly(range) {
  var today = new Date();
  var thisYear = today.getFullYear();
  return range.
    map(function(date) {
      date = date.split('-');
      return {
        'year': parseInt(date[0]),
        'month': parseInt(date[1]),
        'day': parseInt(date[2])
      }
    }).
    reduce(function(start, end) {
    var startDate = [parseMonth(start.month), parseDay(start.day)]
    var endDate = [];
    if (start.year !== thisYear) {
      startDate.push(start.year);
    }
    if (end.month !== start.month) {
      endDate.push(end.month);
    }
    if (end.day !== start.day) {
      endDate.push(parseDay(end.day));
    }
    return [startDate.join(' '), endDate.join(' ')];
  });
  
  function parseMonth(month) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
