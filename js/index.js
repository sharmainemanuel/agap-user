function initPushwoosh(){cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");"Android"==device.platform&&registerPushwooshAndroid(),("iPhone"==device.platform||"iOS"==device.platform)&&registerPushwooshIOS(),"Win32NT"==device.platform&&registerPushwooshWP()}var app={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){initPushwoosh(),app.receivedEvent("deviceready")},receivedEvent:function(e){var i=document.getElementById(e),t=i.querySelector(".listening"),o=i.querySelector(".received");t.setAttribute("style","display:none;"),o.setAttribute("style","display:block;"),console.log("Received Event: "+e)}};