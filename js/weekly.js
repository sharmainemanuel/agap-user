$(document).ready(function(){$.ajax({type:"GET",url:"http://m.weather.gov.ph/agaptest/weekly_outlook.php",async:!1,success:function(t){setTimeout(function(){
	
	$("#imgLoader").fadeOut();var e=t.result[0].issuedtime,s=t.result[0].outlook1;
	 if(s.includes("Â"))
    s = s.replace("Â", "");
	$(".inner").html("<p>"+s+"</p>")},1e3)}})});