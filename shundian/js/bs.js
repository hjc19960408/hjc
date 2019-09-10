;(function(){
	class List{
		constructor() {
		    this.box=document.querySelectorAll('.bnimg');
			this.url="http://localhost/shundian/data/banner.json";
			this.load();
			console.log(this.box[0])
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
			for(var i=0;i<this.res.length;i++){
				for (var j=1;j<this.box.length;j++) {
					if (i=j) {
						this.box[j-1].innerHTML=`<img src='${this.res[i-1].url}'>`;
						// console.log(i,j,this.res[0].url)
					}
				}
				
			}
			
		}
	}
	new List();
})();