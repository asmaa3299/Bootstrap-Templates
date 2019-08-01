function Click(button,button2,btn3,card,header,list,image,p){

	document.getElementById(card).style.transform = "rotateY(180deg)";
	document.getElementById(header).style.visibility = "visible";
	document.getElementById(list).style.visibility = "visible";
	document.getElementById(button2).style.visibility = "visible";
	document.getElementById(btn3).style.visibility = "visible";
	document.getElementById(header).style.transform = "rotateY(180deg)";
	document.getElementById(list).style.transform = "rotateY(180deg)";
	document.getElementById(button2).style.transform = "rotateY(180deg)";
	document.getElementById(btn3).style.transform = "rotateY(180deg)";
	document.getElementById(button).style.visibility = "hidden";
	document.getElementById(image).style.visibility = "hidden";
	document.getElementById(p).style.visibility = "hidden";
	
	
}
function BackClick(button,button2,btn3,card,header,list,image,p){
	document.getElementById(card).style.transform = "rotateX(360deg)";
	document.getElementById(header).style.visibility = "hidden";
	document.getElementById(list).style.visibility = "hidden";
	document.getElementById(button2).style.visibility = "hidden";
	document.getElementById(btn3).style.visibility = "hidden";
	document.getElementById(button).style.visibility = "visible";
	document.getElementById(image).style.visibility = "visible";
	document.getElementById(p).style.visibility = "visible";
}
