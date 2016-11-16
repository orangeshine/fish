var aneObj = function()
{
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{
	for(var i=0;i<this.num;i++)
	{	
		this.rootx[i] = i*16+Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight-200 + Math.random()*50;
		this.amp[i] = Math.random()*50+20;
	}
}
aneObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.05;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#307CE5";
	for(var i=0;i<this.num;i++)
	{
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i] = this.rootx[i]+l*this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-70,this.headx[i],this.heady[i]);	
		ctx2.stroke();
	}
	ctx2.restore();
}