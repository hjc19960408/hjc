;(function(){
	class List{
		constructor() {
		    this.box=document.querySelectorAll('.commodity');
			this.url="http://localhost/shundian/data/find.json";
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
				for (var j=1;j<this.box.length+1;j++) {
					if (i==1 && j==1) {
						this.box[j-1].innerHTML=`
							<div class="find-commodity-left">
								<div class="find-commodity-left-t">
									<a href="">
										<img src='${this.res[i-1].url}' >
									</a>
								</div>
								<div class="find-commodity-left-b">
									<div class="find-commodity-left-b-l">
										<a href="">
											<img src='${this.res[i].url}' >
										</a>
									</div>
									<div class="find-commodity-left-b-r">
										<a href="">
											<img src='${this.res[i+1].url}' >
										</a>
									</div>
								</div>
							</div>
							<div class="find-commodity-right">
								<div class="find-commodity-right-t">
									<div class="find-commodity-right-t-l">
										<a href="">
											<img src='${this.res[i+2].url}'>
										</a>
									</div>
									<div class="find-commodity-right-t-r">
										<a href="">
											<img src='${this.res[i+3].url}'>
										</a>
									</div>
								</div>
								<div class="find-commodity-right-m">
									<a href="">
										<img src='${this.res[i+4].url}' >
									</a>
								</div>
								<div class="find-commodity-right-b">
									<div class="find-commodity-right-b-l">
										<a href="">
											<img src='${this.res[i+5].url}'>
										</a>
									</div>
									<div class="find-commodity-right-b-r">
										<a href="">
											<img src='${this.res[i+6].url}'>
										</a>
									</div>
								</div>
							</div>
						`;
					}
					if (i==2 && j==2) {
						this.box[j-1].innerHTML=`
							<div class="find-commodity-left">
								<div class="find-commodity-left-t">
									<a href="">
										<img src='${this.res[i-2].url}' >
									</a>
								</div>
								<div class="find-commodity-left-b">
									<div class="find-commodity-left-b-l">
										<a href="">
											<img src='${this.res[i-1].url}' >
										</a>
									</div>
									<div class="find-commodity-left-b-r">
										<a href="">
											<img src='${this.res[i].url}' >
										</a>
									</div>
								</div>
							</div>
							<div class="find-commodity-right">
								<div class="find-commodity-right-t">
									<div class="find-commodity-right-t-l">
										<a href="">
											<img src='${this.res[i+1].url}'>
										</a>
									</div>
									<div class="find-commodity-right-t-r">
										<a href="">
											<img src='${this.res[i+2].url}'>
										</a>
									</div>
								</div>
								<div class="find-commodity-right-m">
									<a href="">
										<img src='${this.res[i+3].url}' >
									</a>
								</div>
								<div class="find-commodity-right-b">
									<div class="find-commodity-right-b-l">
										<a href="">
											<img src='${this.res[i+4].url}'>
										</a>
									</div>
									<div class="find-commodity-right-b-r">
										<a href="">
											<img src='${this.res[i+5].url}'>
										</a>
									</div>
								</div>
							</div>
						`;
					}
					if (i==3 && j==3) {
						this.box[j-1].innerHTML=`
							<div class="find-commodity-left">
								<div class="find-commodity-left-t">
									<a href="">
										<img src='${this.res[i-3].url}' >
									</a>
								</div>
								<div class="find-commodity-left-b">
									<div class="find-commodity-left-b-l">
										<a href="">
											<img src='${this.res[i-2].url}' >
										</a>
									</div>
									<div class="find-commodity-left-b-r">
										<a href="">
											<img src='${this.res[i-1].url}' >
										</a>
									</div>
								</div>
							</div>
							<div class="find-commodity-right">
								<div class="find-commodity-right-t">
									<div class="find-commodity-right-t-l">
										<a href="">
											<img src='${this.res[i].url}'>
										</a>
									</div>
									<div class="find-commodity-right-t-r">
										<a href="">
											<img src='${this.res[i+1].url}'>
										</a>
									</div>
								</div>
								<div class="find-commodity-right-m">
									<a href="">
										<img src='${this.res[i+2].url}' >
									</a>
								</div>
								<div class="find-commodity-right-b">
									<div class="find-commodity-right-b-l">
										<a href="">
											<img src='${this.res[i+3].url}'>
										</a>
									</div>
									<div class="find-commodity-right-b-r">
										<a href="">
											<img src='${this.res[i+4].url}'>
										</a>
									</div>
								</div>
							</div>
						`;
					}
				}
				
			}
			
		}
	}
	new List();
})();