$.ajax
({
  type: "GET",
  url: "http://m.weather.gov.ph/agaptest/weather_bulletin.php",
  async: false,
  success: function (result2){
	  setTimeout(function(){$("#imgLoader").fadeOut();
	  var bulletin = result2.result.length;

		if (bulletin == ""){
				$(".inner").html("As of today, there is no tropical cyclone within the Philippine Area of Responsibility (PAR)");
			}
			else{
					  	for(j=0; j<=result2.result.length; j++){
				  var tc_name = result2.result[0].tc_name;
	  var int_tc_name = result2.result[0].int_tc_name;
	  	  var movement = result2.result[0].movement;
	  var maxwind = result2.result[0].maxwind;
	  var warning_or_alert = result2.result[0].warning_or_alert;
	  	  var fposition = result2.result[0].fposition;
	  var signaloneL = result2.result[0].signaloneL;
	  var signaloneV = result2.result[0].signaloneV;
	  var signaloneM = result2.result[0].signaloneM;
	  var signaltwoL = result2.result[0].signaltwoL;
	  var signaltwoV = result2.result[0].signaltwoV;
	  var signaltwoM = result2.result[0].signaltwoM;
	  var signalthreeL = result2.result[0].signalthreeL;
	  var signalthreeV = result2.result[0].signalthreeV;
	  var signalthreeM = result2.result[0].signalthreeM;
	  var signalfourL = result2.result[0].signalfourL;
	  var signalfourV = result2.result[0].signalfourV;
	  var signalfourM = result2.result[0].signalfourM;
	  var signalfiveL = result2.result[0].signalfiveL;
	  var signalfiveV = result2.result[0].signalfiveV;
	  var signalfiveM = result2.result[0].signalfiveM;
	  
	 var time_issued = result2.result[0].bulletin_number;
	 var time_issued = result2.result[0].time_issued;
	 var date_issued = result2.result[0].date_issued;
	 var location_sentence = result2.result[0].location_sentence;
	 var issued_date = time_issued + "," +date_issued;
		
				
	//$(".inner").html("Issued Date: "+issued_date+" <br>Tropical Cyclone: " +tc_name +"("+int_tc_name+")<br><br>"+location_sentence+"");
	$(".inner").html("Issued Date: "+issued_date+" <br>Tropical Cyclone: " +tc_name +"("+int_tc_name+")<br><br>"+location_sentence+"");
			
		}
				
			}

	  });
	},  error: function (request, textStatus, errorThrown) {
			setTimeout(function(){$('#imgLoader').fadeOut(); }, 1000);	
       errMsg();
        console.log(textStatus);
        console.log(errorThrown);
    }
});

