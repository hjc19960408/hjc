;(function(){
	$(".left-nav").children("li").not(".backtop").click(function(){
        // console.log($(this).index())
        // console.log($(".box").eq($(this).index())[0].offsetTop)

        // $(document).scrollTop($(".box").eq($(this).index())[0].offsetTop)

        // 获取点击li的索引
        var index = $(this).index();

        // 根据li的索引获取对应的div的距离顶部的位置
        var t = $(".box").eq(index)[0].offsetTop;
		var jt=$("#main")[0].offsetTop;
        // 将这个位置，通过动画，设置给根元素html的滚动距离
        $("html").animate({
            scrollTop:t+jt
        })
    })
	$(".backtop").click(function(){
		$("html").animate({
			scrollTop:0
		})
	})
	$(".left-nav").children("li").hover(function(){
		$(".left-nav").children("li").css({
			background:""
		}).eq($(this).index()).css({
            background:"#00bbd7"
        })
	})
	var ln=document.querySelector(".left-nav");
	var main=document.querySelector("#main")
	onscroll=function(){
		var scrollT = document.documentElement.scrollTop;
		if (scrollT<main.offsetTop) {
			ln.style.display="none";
		} else{
			ln.style.display="block";
		}
		
	}
})();
 