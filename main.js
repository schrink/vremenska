



$('a').on('click', function (){
    var city = $(this).data('city');
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        units: 'metric',
        appid: '40b6854107104968c3e7076c7ac028fa',
        q: city
      },
      success: function(response) {
        $('h1 span').text( Math.round(response.main.temp) );
        $('h2').text(response.weather[0].description)
        var imgUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        $('.icon img').attr('src', imgUrl);
      }
    })

})


