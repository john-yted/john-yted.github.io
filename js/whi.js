$(document).ready(function() {
	
  	$("#subNav a").click(function(btn) {
  		$( "#subNav a" ).each(function(index) {
			$( "#subNav a" ).removeClass("active")
		});
		
		$(btn.currentTarget).addClass("active");
		
		var replaceHtml;
		
		switch($(btn.currentTarget).attr("id").toString())
		{
			case "specs" :
				replaceHtml="<iframe width=\"535\" height=\"401\" src=\"http:\/\/www.youtube.com/embed/YUszToa1Qjw\" frameborder=\"0\" allowfullscreen></iframe>";
				break;
			case "comparison" :
				replaceHtml="<iframe width=\"535\" height=\"401\" src=\"http:\/\/www.youtube.com/embed/6W6otuPE2qw\" frameborder=\"0\" allowfullscreen></iframe>";
				break;	
		}
		
		$("#content").fadeOut('slow', function() {
			$("#content").html(replaceHtml);
			$("#content").fadeIn('slow');
		});
		
	});

});