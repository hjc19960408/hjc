;(function(){
	class List{
		constructor() {
		    this.box=document.querySelector('#tj');
			this.url="http://localhost/shundian/data/goods.json";
			this.load();
			this.addEvent();
			
		}
		load(){
			var that=this;
			ajax({
				url:this.url,
				success:function(res){
					that.res=JSON.parse(res);
					that.display()
					var aimg = document.querySelectorAll("#tj li img");
					var arr = Array.from(aimg);
					console.log(aimg)
					var t;
					
					onload = onscroll = function(){
					    clearTimeout(t);
					    t = setTimeout(function(){
					        fn();
					    },100)
					}
					function fn(){
					    var scrollT = document.documentElement.scrollTop;
					    var clientH = document.documentElement.clientHeight;
					    
					    for(var i=0;i<arr.length;i++){
					        if(arr[i].offsetTop - scrollT < clientH){
					            arr[i].src = arr[i].getAttribute("abc-src");
					            arr.splice(i,1)
					        }
					    }
					}
				}
			})
		}
		display(){
			var str="";
			for(var i=0;i<this.res.length;i++){
				str+=`<li index="${this.res[i].goodsID}">
						  <div class="Recommend-commodity-new" >
							<p>新品</p>
						  </div>
						  <div class="Recommend-commodity-banner" >
							<a>
								<img abc-src="${this.res[i].url}">
							</a>
							<h4>${this.res[i].del}
							</h4>
							<p>
								${this.res[i].tip}
							</p>
							<div class="price">${this.res[i].price}</div>
						  </div>
						  <input type="button" name="" id="btn" value="加入购物车" />
					  </li>
					  `;
			}
			this.box.innerHTML=str;
		}
		addEvent(){
			console.log(this.box)
			var that=this;
			this.box.addEventListener("click",function(eve){
				// console.log(1)
				var e=eve || window.event;
				var target=e.target || e.srcElement;
				if (target.className=="Recommend-commodity-banner") {
					location.href="http://localhost/shundian/goods.html";
				}
				if(target.id=="btn"){
					// console.log(target.parentNode)
					that.id=target.parentNode.getAttribute("index");
					that.setLocal();
				}
			})
		}
		setLocal(){
			
			var that=this;
			this.goods=localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
			console.log(this.goods)
			if (this.goods.length==0) {
				this.goods.push({
					id:this.id,
					num:1
				})
				
			} else{
				var i;
				var onoff=this.goods.some(function(value,index){
					i=index;
					return value.id==that.id;
				})
				if (onoff) {
					this.goods[i].num++;
				} else{
					this.goods.push({
						id:this.id,
						num:1
					})
				}
			}
			localStorage.setItem("goods",JSON.stringify(this.goods));
		}
	}
	new List();
	// var aimg = document.querySelectorAll("#tj li img");
	// var arr = Array.from(aimg);
	// console.log(aimg[0])
	// var t;
	// 
	// onload = onscroll = function(){
	//     clearTimeout(t);
	//     t = setTimeout(function(){
	//         // fn();
	//     },100)
	// }
	function fn(){
	    var scrollT = document.documentElement.scrollTop;
	    var clientH = document.documentElement.clientHeight;
	    
	    for(var i=0;i<arr.length;i++){
	        if(arr[i].offsetTop - scrollT < clientH){
	            arr[i].src = arr[i].getAttribute("abc-src");
	            arr.splice(i,1)
	        }
	    }
	}
})();