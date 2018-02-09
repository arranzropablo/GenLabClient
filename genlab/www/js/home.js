$(document).ready(function() {
    $("#leftMenu").hide();
});

$("#menuBtn").click(function(){
	if($("#leftMenu").is(":visible")){
		$("#leftMenu").hide();
	}else{
		$("#leftMenu").show();
	}
});