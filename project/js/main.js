function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&appid="+apiKey;

  $(".error").text("");

  $.ajax(url, {success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }, error: function(error){
    $(".error").text("An error occurred");
  }})
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

