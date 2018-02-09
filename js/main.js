function click_circle(left, eq_)
{	
	//$('#slider').find('.part').eq(1).find('div').removeClass("selected");
	move_element(left, eq_);
}

$('#slider').find('.part').eq(1).find('div').eq(0).click(function ()
{		
	click_circle(0,0);
});
$('#slider').find('.part').eq(1).find('div').eq(1).click(function ()
{		
	click_circle(-100,1);
});

$('#slider').find('.part').eq(1).find('div').eq(2).click(function ()
{
	click_circle(-200,2);
});

function move_element(left, eq_)
{
	//$('#slider').find('.part').eq(1).find('div').removeClass("selected");
	$("#slider").find(".part").eq(0).animate({
		"left" : left + "%"
	}, 800);
	$(this).addClass("selected");
	add_class(eq_)
}

function add_class(eq_)
{
	$('#slider').find('.part').eq(1).find('div').removeClass("selected");	
	$('#slider').find('.part').eq(1).find('div').eq(eq_).addClass("selected");	
}