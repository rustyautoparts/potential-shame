$(document).ready(function() {
  var num = getRandomInt(0, quotes.length - 1);
  displayQuote(num);

  $("#new-quote").on("click", function() {
    num = getRandomInt(0, quotes.length - 1);
    displayQuote(num);
  });
  function displayQuote(number) {
    $("#quote").html(quotes[number].quote);
    $("#author").html(quotes[number].author);
    if (quotes[number].source) {
      $("#source").html(quotes[number].source);
      $("#source").toggleClass("hidden");
    } else if ( $("#source").hasClass("hidden") == false ) {
      $("#source").toggleClass("hidden");
    }
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
