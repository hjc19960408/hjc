;(function(){
	class List{
		constructor() {
		    this.box=document.querySelector('#news');
			this.url="http://localhost/shundian/data/new.json";
			this.load();
			this.addEvent();
		}
		load(){
			var that=this;
			ajax({
				url:this.url,
				success:function(res){
					console.log(res)
					that.res=JSON.parse(res);
					that.display()
				}
			})
		}
		display(){
			var str="";
			for(var i=0;i<this.res.length;i++){
				str+=`<li>
						  <div class="Recommend-commodity-new" index="${this.res[i].goodsId}">
							<p>新品</p>
						  </div>
						  <div class="Recommend-commodity-banner" >
							<a href="">
								<img src="${this.res[i].url}">
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
			var that=this;
			this.box.addEventListener("click",function(eve){
				var e=eve || window.event;
				var target=e.target || e.srcElement;
				if(target.className=="btn"){
					that.id=target.parentNode.getAttribute("index");
					that.setLocal();
				}
			})
		}
		setLocal(){
			var that=this;
			this.goods=localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
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
})();