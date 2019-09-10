;(function(){
	class List{
		constructor() {
		    this.box=document.querySelector(".four-bg");
			this.url="http://localhost/shundian/data/four.json";
			this.load();
			console.log(this.box)
		}
		load(){
			var that=this;
			ajax({
				url:this.url,
				success:function(res){
					// console.log(res)
					that.res=JSON.parse(res);
					console.log(that.res)
					that.display()
				}
			})
		}
		display(){
			this.box.innerHTML=`<img src="${this.res[0].url}" >`;
		}
	}
	new List();
})();