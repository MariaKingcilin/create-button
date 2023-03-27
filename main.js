var div=document.querySelector("#new");
let a=["Click","Submit","Enter","Cancel","Reset"];
a.forEach(function(b)
{
	let butten=document.createElement("button");
	butten.innerHTML=b;
	div.appendChild(butten);
})