;(function(){
	class List{
		constructor() {
		    this.box=document.querySelector('#four-r');
			this.url="http://localhost/shundian/data/four-r.json";
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
			
			this.box.innerHTML=`
				<div class="FourSeasons-siji-r-l" index="${this.res[0].goodsID}">
					<div class="FourSeasons-commodity-new">
						<p></p>
					</div>
					<div class="FourSeasons-commodity-banner" >
						<a href="">
							<img src="${this.res[0].url}">
						</a>
						<h4>
							${this.res[0].del}
						</h4>
						<p>
							${this.res[0].tip}
						</p>
						<div class="price">${this.res[0].price}</div>
					</div>
				</div>
				<div class="FourSeasons-siji-r-r" index="${this.res[0].goodsID}">
					<div class="FourSeasons-commodity-new">
						<p></p>
					</div>
					<div class="FourSeasons-commodity-banner" >
						<a href="">
							<img src="${this.res[1].url}" >
						</a>
						<h4>${this.res[1].del}</h4>
						<p>${this.res[1].tip}</p>
						<div class="price">${this.res[1].price}</div>
					</div>
				</div>
			`;
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