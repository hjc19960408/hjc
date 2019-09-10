;(function($){
    "use strict";

    // 有没有操作到DOM
    // 有：局部
    // 没有：只是做功能，类似于ajax，cookie，全局

    $.fn.banner = function(options){
        var obj = {};
        // console.log("hello banner")
        // 默认参数的处理
        var {items,left,right,list,autoPlay,moveTime,delayTime,index} = options;

        list = list===false ? false : true;
        autoPlay = autoPlay===false ? false : true;
        moveTime = moveTime || 200;
        delayTime = delayTime || 3000;

        index = index || 0;
        obj.iPrev = items.length-1;

        // 设置默认显示的图片
        items.css({
            left:items.eq(0).width()
        }).eq(index).css({
            left:0
        })

        // list的功能
        if(list){
            // L1.生成布局
            var str = "";
            for(var i=0;i<items.length;i++){
                str += `<li>${i+1}</li>`;
            }
            obj.ul = $("<ul>").html(str);
            this.append(obj.ul);
            obj.ul.css({
                // width:"50%",
                // height:30,
                lineHeight:"20px",
                display:"flex",
                listStyle:"none",
                // background:"#eee",
                position:"absolute",
                left:"40%",
                top:"530px",
                textAlign:"center"
            }).children("li").css({
				marginRight:"10px",
				background:"rgba(0,0,0,.3)",
                width:"20px",
				height:"20px",
                borderRadius:"50%"
            }).eq(index).css({
                background:"red",
                color:"#fff"
            })
            // L2.绑定事件
            obj.ul.children("li").on("click",function(){
                // L3.判断方向
                if($(this).index() > index){
                    // L4.开始离开和进入
                    obj.listMove($(this).index(),1)
                }
                if($(this).index() < index){
                    obj.listMove($(this).index(),-1)
                }

                // L5.设置li的当前项
                obj.ul.children("li").css({
                    background:"rgba(0,0,0,.3)",
                    color:"#ccc"
                }).eq($(this).index()).css({
                    background:"red",
                    color:"#fff"
                })

                // L6.点击之后，点击的索引，就是下一次的当前索引
                index = $(this).index();
            })
        }
        obj.listMove = function(iNow,type){
            items.eq(index).css({
                left:0
            }).stop().animate({
                left:-items.eq(0).width() * type
            },moveTime).end().eq(iNow).css({
                left:items.eq(0).width() * type
            }).stop().animate({
                left:0
            },moveTime)
        }

        // 左右按钮的功能
        if(left != undefined && left.length > 0 && right != undefined && right.length > 0){
            // B1.绑定事件
            left.on("click",function(){
                // B2.计算索引
                if(index == 0){
                    index = items.length-1;
                    obj.iPrev = 0;
                }else{
                    index--;
                    obj.iPrev = index + 1;
                }
                // B3.开始运动
                obj.btnMove(1);
            })
            right.on("click",obj.rightClick)
        }

        obj.rightClick = function(){
            if(index == items.length-1){
                index = 0;
                obj.iPrev = items.length-1
            }else{
                index ++;
                obj.iPrev = index-1
            }
            obj.btnMove(-1)
        }

        obj.btnMove = function(type){
            items.eq(this.iPrev).css({
                left:0
            }).stop().animate({
                left:items.eq(0).width() * type
            },moveTime).end().eq(index).css({
                left:-items.eq(0).width() * type
            }).stop().animate({
                left:0
            },moveTime)

            if(!list) return;
            this.ul.children("li").css({
                background:"rgba(0,0,0,.3)",
                color:"#ccc"
            }).eq(index).css({
                background:"red",
                color:"#fff"
            })
        }
        
        // 自动播放的功能
        if(autoPlay){
            // A1.直接开启计时器
            var t = setInterval(() => {
                // right.trigger("click");
                obj.rightClick()
            }, delayTime);
            
            this.hover(function(){
                // A2.鼠标进入停止
                clearInterval(t)
            },function(){
                // A3.鼠标离开，再开
                t = setInterval(() => {
                    // right.trigger("click");
                    obj.rightClick()
                }, delayTime);
            })

        }
    }
})(jQuery);