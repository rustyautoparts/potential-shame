$(document).ready(function() {
  var num = getRandomInt(0, quotes.length - 1);
  //displayQuote(num);
  //Following code for sytling ONLY
  var longestQuote = quotes.reduce(function(lastQuote, thisQuote) {
    if (thisQuote.quote.length > lastQuote.quote.length) {
      return thisQuote;
    }
    return lastQuote;
  });
  $("#quote").html(longestQuote.quote);
  $("#author").html(longestQuote.author);
  $("#source").html(longestQuote.source);
  //End styling test

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
