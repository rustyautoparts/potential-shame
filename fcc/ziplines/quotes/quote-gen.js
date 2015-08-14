$(document).ready(function() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var num = getRandomInt(0, quotes.length - 1);
  console.log(num);
  console.log(quotes[num].quote);
  console.log(quotes[num].author);
  console.log(quotes[num].source);
});
