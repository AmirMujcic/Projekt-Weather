$(function(){

    $.ajax({
        type:'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Zenica,ba&units=metric&APPID=a2ee385b0f11a4bdd3e40b91ddb3432b',
        success: function(data){
            $('#today-weather').html(data.weather[0].main);
            var picCurrent = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'
            $('#weatherPic').attr('src',picCurrent);
            $('#min-temp-today').html('Min Temp: ' + data.main.temp_min + '°C');
            $('#max-temp-today').html('Max Temp: ' + data.main.temp_max + '°C');
            $('#temp-today').html('Temp: ' + data.main.temp + '°C');
            $('#real-temp-today').html('Feels Like: ' + data.main.feels_like + '°C');
        }
    })
   
})