			$(document).ready(function(){
		$.ajax
({

  type: "GET",
  url: "http://m.weather.gov.ph/agaptest/gfa.php",
  async: false,

  success: function (result2){
	setTimeout(function(){
		$('#imgLoader').fadeOut();
	if(result2.result == "" || result2.result == null){
			$( ".inner" ).html("<h2>As of today there is no flood advisory</h2>");
	}
	else{
 	var region = result2.result['26f22ef9-c7af-4474-b3a1-85dd44a74ba6'].info.parameter.value;
 	var area = result2.result['26f22ef9-c7af-4474-b3a1-85dd44a74ba6'].info.area.areaDesc;
 	var headline = result2.result['26f22ef9-c7af-4474-b3a1-85dd44a74ba6'].info.headline;
 	var description = result2.result['26f22ef9-c7af-4474-b3a1-85dd44a74ba6'].info.description;

	
			$( ".inner" ).html("<p><span>Region: </span><br>" +region+"</p><p><span>Area: </span><br>" +area+"</p><p><span>Headline: </span><br>" +headline+"</p><p><span>Description: </span><br>" +description+"</p>");
		
	}

	 }, 1000);
	},  error: function (request, textStatus, errorThrown) {
        //console.log(request.responseText);
        console.log(textStatus);
        console.log(errorThrown);
    }
});
});