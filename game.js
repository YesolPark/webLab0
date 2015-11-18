var interval = 3000;
var numberOfBlocks = 9;
var numberOfTarget = 3;
var targetBlocks = [];
var selectedBlocks = [];
var timer;

var answer_c = 0;
var answer_a = 0;



document.observe('dom:loaded', function(){
	$("start").observe("click",stopToStart);
	$("stop").observe("click",stopGame);
});

function stopToStart(){
    stopGame();
    startToSetTarget();



    
}

function stopGame(){
	var b = $$("div#blocks div.block");
	for(var i = 0 ; i <= 8 ; i ++){
		b[i].style.backgroundColor="#eeeeee"
	}
	answer_c = 0;
	answer_a = 0;
	targetBlocks = [];
	selectedBlocks = [];
	timer = 0;
	document.getElementById("state").innerHTML="Stop";
}

function startToSetTarget(){
	document.getElementById("state").innerHTML="Ready";
	    while(targetBlocks.length < 3){
    	var temp = parseInt(Math.random()*10);
    	if(targetBlocks.indexOf(temp) == -1 && temp >= 0 && temp <= 8){
    		targetBlocks.push(temp);
    		answer_a ++;
    	}
    }
    var inVal = setTimeout(setTargetToShow, interval);
    clearTimeOut(inval);
}

function setTargetToShow(){
	//alert("hi");
	document.getElementById("state").innerHTML="Memorize";
	var b = $$("div#blocks div.block");
	for(var i = 0 ; i < 3 ; i ++){
		b[targetBlocks.pop()].style.backgroundColor="red";
	}
}

function showToSelect(){
	document.getElementById("state").innerHTML="Select";
	target = 0;
	var b = $$("div#blocks div.block");
	for(var i = 0 ; i <= 8 ; i ++){
		b.observe("click", function(){
			b.addClassName("selected");
		});
	}
}
function selectToResult(){

}
