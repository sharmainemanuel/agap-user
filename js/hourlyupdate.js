
			$(document).ready(function(){
		$.ajax
({

  type: "GET",
  url: "http://m.weather.gov.ph/agaptest/ty_hourly.php",
  async: false,

  success: function (result2){
	setTimeout(function(){
		$('#imgLoader').fadeOut();
		var test =result2.result[result2.result.length-1];
		
 	var ty_name = test.ty_name;
 //	alert(ty_name);
 	var intl_name = test.intl_name;
 	var ty_date = test.ty_date;
 	var ty_time = test.ty_time;
 	//var issued_for = test.ty_lat;
 	//var issued_for = test.ty_lon;
 	var ty_reference = test.ty_reference;

	$( ".inner" ).html("<p><span>Typhoon Name:<br> </span>"+ty_name+"</p><p><span>International Name:</span><br> "+intl_name+"</p><p><span>Issued :</span><br> "+ty_time+ " ,"+ty_date+"</p><p><span>Reference: <br> </span>" +ty_reference+"</p>");
	 }, 1000);
	},  error: function (request, textStatus, errorThrown) {
        console.log(request.responseText);
        console.log(textStatus);
        console.log(errorThrown);
    }
});
});