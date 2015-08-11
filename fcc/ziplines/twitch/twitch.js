$(document).ready(function() {
  var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","comster404","brunofin","thomasballinger","noobs2ninjas","medrybw","beohoff"]
  streams.forEach(function(stream) {
    $.getJSON("https://api.twitch.tv/kraken/channels/" + stream + "?callback=?")
      .done(function(data) {
      var name = data.display_name;
      var avatar = data.logo;
      var streamItem = "#" + stream;
      if (data.error) {
        console.log("ERROR: " + stream + " " + data.error);
      } else {
        $("#streams").append("<li id='" + stream + "' class='stream'></li>");
        if (!avatar) {
          avatar = "404user.png";
        }
        $(streamItem).append("<img class='avatar' src='" + avatar + "'></div>");
        $(streamItem).append("<h3 class='name'>" + name + "</h3>");
        $(streamItem).append("<p class='status'></p>");
        $.getJSON( "https://api.twitch.tv/kraken/streams/" + stream + "?callback=?")
          .done(function(data) {
          if (!data.stream) {
            $(streamItem + " .status").append("Offline");
          } else {
            $(streamItem + " .status").append(data.stream.channel.status);
          }
          $(streamItem).children().wrapAll("<a href='" + data.url + "'></a>");
        });
      }
    });
  });
});
