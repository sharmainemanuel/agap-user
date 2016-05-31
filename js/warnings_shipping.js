
$(document).ready(function(){
$.ajax
({

  type: "GET",
  url: "http://m.weather.gov.ph/agaptest/iws.php",
  async: false,

  success: function (result2){
	setTimeout(function(){
		$('#imgLoader').fadeOut(); }, 1000);
	localStorage.setItem("warning_category", result2.result[0].warning_category);
	localStorage.setItem("warning_number", result2.result[0].warning_number);
	localStorage.setItem("ty_type", result2.result[0].tc_type);



  	var date = result2.result[0].date;
 	var warning_category = localStorage.getItem("warning_category");
 	var warning_number = localStorage.getItem("warning_number");
 	var ty_type = localStorage.getItem("ty_type");
	var int_tc_name = result2.result[0].int_tc_name;
 	var tc_number = result2.result[0].tc_number;
	var includes_radar = result2.result[0].includes_radar;
	var location_latlng = result2.result[0].location_latlng;
	var fcst = result2.result[0].fcst;
	var fcst_value = result2.result[0].fcst_value;
	var sea_condition = result2.result[0].sea_condition;
	var tc_radius = result2.result[0].tc_radius;
	var extent = result2.result[0].extent;


	if (int_tc_name == "" || int_tc_name == undefined)
		int_tc_name = "NONE";
	
	if (tc_number == "" || tc_number == undefined)
		tc_number = "NONE";	
	
	if (includes_radar == "" || includes_radar == undefined)
		includes_radar = "NONE";

	$( ".inner" ).append("<ul data-role=listview data-inset=false data-icon=false data-divider-theme=b class=ui-listview> <li class='ui-li-static ui-body-inherit ui-first-child'> <span>Warning Category:</span> "+warning_category+" </li> <li class='ui-li-static ui-body-inherit'> Warning Number: "+warning_number+" </li></li> <li class='ui-li-static ui-body-inherit'> Tropical Type: "+ty_type+" </li></li> <li class='ui-li-static ui-body-inherit'> Tropical International Name: "+int_tc_name+" </li></li> <li class='ui-li-static ui-body-inherit'> Tropical Number: "+tc_number+" </li></li> <li class='ui-li-static ui-body-inherit'> Includes Radar: "+includes_radar+" </li></li> <li class='ui-li-static ui-body-inherit'> Location(lot,lang): "+location_latlng+" </li></li> <li class='ui-li-static ui-body-inherit'> Forecast: "+fcst+" </li></li> <li class='ui-li-static ui-body-inherit'> Forecast Value: "+fcst_value+" </li></li> <li class='ui-li-static ui-body-inherit'> Sea Condition: "+sea_condition+" </li></li> <li class='ui-li-static ui-body-inherit'> Tropical Radius: "+tc_radius+" </li></li> <li class='ui-li-static ui-body-inherit'> Extent: "+extent+" </li></ul>");

	},  error: function (request, textStatus, errorThrown) {
   	setTimeout(function(){
		$('#imgLoader').fadeOut(); }, 1000);
		errMsg();
        console.log(textStatus);
        console.log(errorThrown);
    }
});
});
	