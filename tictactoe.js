let flag;
let res=0;
function result(){
	if(flag==2){
		alert("Player 'X' has won!");
	}
	else{
		alert("Player 'Y' has won!");
	}
	res=1;
}
function choseX() {

	document.getElementById("choose").style.display = "none";
	flag=1;
}
function choseY() {

	document.getElementById("choose").style.display= "none";
	flag=2;
}
function flagT() {
	if(flag==1)
	{
		flag=2;
		return "X"
	}
	else
	{
		flag=1;
		return "Y";
	}

}
let b11,b12,b13,b21,b22,b23,b31,b32,b33;

function but1(){
	b11=flag;
}
function but2(){
	b12=flag;
}
function but3(){
	b13=flag;
}
function but4(){
	b21=flag;
}
function but5(){
	b22=flag;
}
function but6(){
	b23=flag;
}
function but7(){
	b31=flag;
}
function but8(){
	b32=flag;
}
function but9(){
	b33=flag;
}

function maincheck(){
	if(b11==b12 && b12==b13 && (b11==1||b11==2))
	{
		result();
	}
	else if(b21==b22 && b22==b23 && (b22==1||b22==2))
	{
		result();
	}
	else if(b31==b32 && b32==b33 && (b32==1||b32==2))
	{
		result();
	}
	else if(b11==b21 && b21==b31 && (b21==1||b21==2))
	{
		result();
	}
	else if(b12==b22 && b22==b32 && (b22==1||b22==2))
	{
		result();
	}
	else if(b13==b23 && b23==b33 && (b23==1||b23==2))
	{
		result();
	}
	else if(b11==b22 && b22==b33 && (b22==1||b22==2))
	{
		result();
	}
	else if(b31==b22 && b22==b13 && (b22==1||b22==2))
	{
		result();
	}
	if((b11==1||b11==2) && (b12==1||b12==2) && (b13==1||b13==2) && (b21==1||b21==2) && (b22==1||b22==2) && (b23==1||b23==2) && (b31==1||b31==2) && (b32==1||b32==2) && (b33==1||b33==2) )
	{
		if(res==0)
		{
			document.getElementById("comp").innerHTML="It's a draw!";
		}
	}
}
	
function reset(){

		document.getElementById('b11').innerHTML="unclicked";
		document.getElementById('b11').disabled=false;
		b11=0;

		document.getElementById('b12').innerHTML="unclicked";
		document.getElementById('b12').disabled=false;
		b12=0;

		document.getElementById('b13').innerHTML="unclicked";
		document.getElementById('b13').disabled=false;
		b13=0; 

		document.getElementById('b21').innerHTML="unclicked";
		document.getElementById('b21').disabled=false;
		b21=0; 

		document.getElementById('b22').innerHTML="unclicked";
		document.getElementById('b22').disabled=false;
		b22=0;

		document.getElementById('b23').innerHTML="unclicked";
		document.getElementById('b23').disabled=false;
		b23=0;

		document.getElementById('b31').innerHTML="unclicked";
		document.getElementById('b31').disabled=false;
		b31=0;

		document.getElementById('b32').innerHTML="unclicked";
		document.getElementById('b32').disabled=false;
		b32=0;

		document.getElementById('b33').innerHTML="unclicked";
		document.getElementById('b33').disabled=false;
		b33=0;

		document.getElementById("choose").style.display = "block";

}

