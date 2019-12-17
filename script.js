$(function(){

    $.ajax({
        type:'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Zenica,ba&units=metric&APPID=a2ee385b0f11a4bdd3e40b91ddb3432b',
        dataType:'json',
        success: function(data){
            $('#today-weather').html(data.weather[0].main);
            var picCurrent = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'
            $('#weatherPic').attr('src',picCurrent);
            $('#min-temp-today').html('Min Temp: ' + data.main.temp_min + '°C');
            $('#max-temp-today').html('Max Temp: ' + data.main.temp_max + '°C');
            $('#temp-today').html('Temp: ' + data.main.temp + '°C');
            $('#real-temp-today').html('Feels Like: ' + data.main.feels_like + '°C');
            $('#today-wind').html('Wind Speed: ' + data.wind.speed + 'm/s');
            $('#today-humidity').html('Humidity: ' + data.main.humidity + '%');
            $('#today-pressure').html('Pressure: ' + data.main.pressure + 'hPa')
            $('#today-clouds').html('Cloud Coverage: ' + data.clouds.all + '%')
        }
    })
    $.ajax({
        type:'GET',
        url: 'https://api.darksky.net/forecast/9d0b14bb921af097bd83266cd451be2c/44.2033523,17.9275785?exclude=currently,minutely,hourly,alerts,flags&units=si',
        dataType:'json',
        success: function(data){
            data = $.parseJSON(data);
            
            
        }

    })            
})