$(document).ready(function(){function t(){navigator.geolocation?(navigator.geolocation.getCurrentPosition(a),console.log("get location")):(x.innerHTML="please check your GPS.",console.log("error in getting location"))}function a(t){var a=t.coords.latitude,e=t.coords.longitude,o="http://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+e+"&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric",i="http://api.openweathermap.org/data/2.5/forecast/daily?lat="+a+"&lon="+e+"&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric";$.ajax({url:o,type:"GET",dataType:"jsonp",cache:!1,success:function(t){var a=t.weather[0].description,e=t.weather[0].icon,o=Math.round(t.main.temp),i=t.name;setTimeout(function(){$("#imgLoader").fadeOut(),$("#imgLoader2").fadeOut(),document.getElementById("show").innerHTML="<div class='card-media'><img width='100%' src='http://openweathermap.org/img/w/"+e+".png'></div><div class='card-title'><h3 class='card-primary-title'>"+o+"&#176; <br>"+i+"</h3>	<h5 class='card-subtitle'>"+a+"</h5><hr></div>"},3e3)}}),$.ajax({url:i,type:"GET",dataType:"jsonp",cache:!1,success:function(t){for(var a=1;5>a;a++){var e=t.list[a].dt,o=new Date(1e3*e),i=new Date(o),n=i.customFormat("#DDD#"),r=Math.round(t.list[a].temp.min),c=Math.round(t.list[a].temp.max),s=t.list[a].weather[0].icon;$("#showDaily").append("<div class='	col-md-3 col-xs-3'><div class='classWithPad'>"+n+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+s+".png'><strong>"+c+"&deg; </strong><br>"+r+"&deg;<br><br></div></div>")}}})}t()});