;(function(){
	class List{
		constructor() {
		    this.box=document.querySelector('#tejia');
			this.url="http://localhost/shundian/data/tejia.json";
			this.load();
		}
		load(){
			var that=this;
			ajax({
				url:this.url,
				success:function(res){
					that.res=JSON.parse(res);
					that.display()
				}
			})
		}
		display(){
			var str="";
			for(var i=0;i<this.res.length;i++){
				str+=`<li index="${this.res[i].goodsID}"">
							<div class="SpecialOffer-commodity-new">
								<p></p>
							</div>
							<div class="SpecialOffer-commodity-banner" >
								<a href="">
									<img src="${this.res[i].url}" >
								</a>
								<h4>
									${this.res[i].del}
								</h4>
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