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
	  var warning_or_alert = result2.result[0].warning_or_alert;
	  var movement = result2.result[0].movement;
	  var maxwind = result2.result[0].maxwind;
	  var fposition = result2.result[0].fposition;
	  var signaloneL = result2.result[0].signaloneL;
	  var signaloneV = result2.result[0].signaloneV;
	  var signaloneM = result2.result[0].signaloneM;
	  var signaltwoL = result2.result[0].signaltwoL;
	  var fposition = result2.result[0].signaltwoV;
	  var fposition = result2.result[0].signaltwoM;
	  var fposition = result2.result[0].signalthreeL;
	  var fposition = result2.result[0].signalthreeV;
	  var fposition = result2.result[0].signalthreeM;
	  var fposition = result2.result[0].signalfourL;
	  var fposition = result2.result[0].signalfourV;
	  var fposition = result2.result[0].signalfourM;
	  var fposition = result2.result[0].signalfiveL;
	  var fposition = result2.result[0].signalfiveV;
	  var fposition = result2.result[0].signalfiveM;
	  
	 var time_issued = result2.result[0].time_issued;
	 var date_issued = result2.result[0].date_issued;
	 var location_sentence = result2.result[0].location_sentence;
	 var issued_date = time_issued + "," +date_issued;
		
				
	$(".inner").html("Issued Date: "+issued_date+" <br>For: " +tc_name +"("+int_tc_name+")<br>"+warning_or_alert+"<br><br>"+issued_date+""+location_sentence+"");
			
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

