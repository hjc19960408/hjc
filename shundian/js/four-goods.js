;(function(){
	class List{
		constructor() {
		    this.box=document.querySelector('.FourSeasons-goods');
			this.url="http://localhost/shundian/data/four-goods.json";
			this.load();
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
				str+=`<li index="${this.res[i].goodsID}"">
							<div class="FourSeasons-commodity-new">
								<p></p>
							</div>
							<div class="FourSeasons-commodity-banner" >
								<a href="">
									<img src="${this.res[i].url}" >
								</a>
								<h4>
									${this.res[i].del}
								</h4>
								<p>
									${this.res[i].tip}
								</p>
								<div class="price">${this.res[i].price}</div>
							</div>
						</li>
					  `;
			}
			this.box.innerHTML=str;
		}
	}
	new List();
})();