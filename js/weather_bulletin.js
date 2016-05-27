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
	  
	 var time_issued = result2.result[0].time_issued;
	 var date_issued = result2.result[0].date_issued;
	 var location_sentence = result2.result[0].location_sentence;
	 var issued_date = time_issued + "," +date_issued;
		
				
				//use Typhoon Name as header (local and international name), inlcude Alert/Signal, time issued, option to view Map track
				$(".inner").html("Issued Date: "+issued_date+" <br>Tropical Cyclone: " +tc_name +"("+int_tc_name+")<br><br>"+location_sentence+"");
			
		}
				
			}

	  });
	}
});

