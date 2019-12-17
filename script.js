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
        dataType:'jsonp',
        success: function(data){
            for(i=1;i<6;i++){
                
                var date = new Date(data.daily.data[i].time*1000);
                console.log(i,date)
                var dayNum = date.getDay()
                var weekArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                var day = $('<h5 style = "text-align:center">'+ weekArray[dayNum]+'</h5>')
                $('#day'+i).append(day);

                
                var summary = $('<p style = "font-size: 12px; text-align:center; font-weight:bold;">' + data.daily.data[i].summary + '</p>');
                $('#day'+i).append(summary);

                
                var temp = $('<h6> Min Temp ' + data.daily.data[i].temperatureLow + '°C - Max Temp ' + data.daily.data[i].temperatureHigh + '°C</h6>')
                $('#day'+i).append(temp);

                var wind = $('<h6>Wind speed: '+data.daily.data[i].windSpeed+'m/s </h6>');
                $('#day'+i).append(wind);
            }
            
        }

    })
    
})