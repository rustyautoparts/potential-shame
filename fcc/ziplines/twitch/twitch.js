$(document).ready(function() {
  var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","comster404","brunofin","thomasballinger","noobs2ninjas","medrybw","beohoff"]
  streams.forEach(function(stream) {
    $("#streams").append("<li id='" + stream + "' class='stream'></li>");
    $.getJSON("https://api.twitch.tv/kraken/channels/" + stream + "?callback=?", function(data) {
    }).done(function(data) {
      var name = data.display_name;
      var avatar = data.logo;
      $("#" + stream).append("<img class='avatar' src='" + avatar + "'></div>");
      $("#" + stream).append("<h3 class='name'>" + name + "</h3>");
    });
    $.getJSON( "https://api.twitch.tv/kraken/streams/" + stream + "?callback=?", function(data) {
    }).done(function(data) {
      if (!data.stream) {
        $("#" + stream).append("<p>Offline</p>");
      } else {
        $("#" + stream).append("<p>Online</p>");
        $("#" + stream).append("<p>" + data.stream.channel.status + "</p>");
      }
    });
  });
});
