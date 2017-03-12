$(document).ready(function(){
	$(window).scroll(function(){
	var top=$(document).scrollTop();
	var menu=$("#menu");
	var top=$(document).scrollTop();
	var items=$(".content");
	var currentId="";
	if(top>500){
		menu.css({"position":"fixed","right":"80px","top":"30px"})
	}
	else{
		menu.css({"position": "absolute","right":"80","top":"490px"})
	}
    items.each(function(){
        var m=$(this);
        var itemTop=m.offset().top;
        if(top>itemTop-100){
        	currentId="#"+m.attr("id");
          
        }
        else{
        	$("#menu a").removeClass("current");	
        }
    });
     var currentLink=menu.find(".current");
  		if(currentId&&currentLink.attr("href")!=currentId)
  		{
  			currentLink.removeClass("current");
  			menu.find("[href="+currentId+"]").addClass("current");
  		}
    var btnScroll=$("#menu a:last-child");
    btnScroll.click(function(){
    	$("body,html").animate({scrollTop:0}
    		,300);
    	bntScroll.stopPropagation();
        
        
    })
     
        
        
    })
     
 
	})
