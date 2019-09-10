;(function(){
	class List{
		constructor() {
		    this.box=document.getElementById("taste");
			this.url="http://localhost/shundian/data/taste.json";
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
			this.box.innerHTML=`
				<div class="taste-left">
					<div class="taste-left-t">
						<a href="">
							<img src="${this.res[0].url}" >
						</a>
					</div>
					<div class="taste-left-b">
						<a href="">
							<img src="${this.res[1].url}" >
						</a>
					</div>
				</div>
				<div class="taste-right">
					<div class="taste-right-t">
						<a href="">
							<img src="${this.res[2].url}" >
						</a>
					</div>
					<div class="taste-right-b">
						<a href="">
							<img src="${this.res[0].url}" >
						</a>
					</div>
				</div>`;
		}
	}
	new List();
})();