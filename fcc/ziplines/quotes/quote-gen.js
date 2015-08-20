$(document).ready(function() {
  displayQuote();
  $("#new-quote").on("click", function() {
    displayQuote();
  });
  function displayQuote() {
    var number = getRandomInt(0, quotes.length - 1);
    var quote = quotes[number].quote;
    var author = quotes[number].author;
    var source = quotes[number].source;
    var tweetUri = encodeURI(quote);
    $("#quote")
      .removeClass()
      .html(quote);
    if (quote.length > 550) {
      $("#quote").addClass("long-quote");
    }
    $("#author").html(author);
    $("#source").html(source);
    $("#tweet-quote").attr("href", "http://twitter.com/intent/tweet?text=" + tweetUri);
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
