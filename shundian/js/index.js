;(function(){
	$("#banner").banner({
	    items:$("#banner").find("a"),      //必选
	    list:true,         //可选，默认为true
	    autoPlay:true,     //可选，默认为true
	    delayTime:2000,     //可选，默认为3000
	    index:0             //可选，默认为0
	});
	$(".apex-right-f").children("li").hover(function(){
		$(".apex-right-f").children("li").eq($(this).index()).find(".shundian").css({
			display:"block"
		})
	},function(){
		$(".apex-right-f").children("li").eq($(this).index()).find(".shundian").css({
			display:"none"
		})
	})
	$("#category").children("li").hover(function(){
		$("#category").children("li").eq($(this).index()).children("ul").css({
			display:"block"
		})
	},function(){
		$("#category").children("li").eq($(this).index()).children("ul").css({
			display:"none"
		})
	})
})();