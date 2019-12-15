$(function(){

    $.ajax({
        type:'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Zenica&APPID=e1603fb9a5d002bd29341af23c0e120f',
        success: function(data){
            console.log('success', data);
        }
    })


})