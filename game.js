"use strict";

var interval = 3000;
var numberOfBlocks = 9;
var numberOfTarget = 3;
var targetBlocks = [];
var selectedBlocks = [];
var timer;
numberOfTarget=0;

document.observe('dom:loaded', function(){

	$("start").observe("click", stopToStart);
	$("stop").observe("click", stopGame);
});

function stopToStart(){
    stopGame();
    startToSetTarget();
}

function stopGame(){

	$("state").innerHTML = "Stop";
	$("answer").innerHTML = "0/0";

	targetBlocks = [];
	selectedBlocks = [];
	//timer = 0;
	numberOfTarget=0;
	clearTimeout(timer);

}

function startToSetTarget(){
	$("state").innerHTML = "Ready";
	//targetBlocks = [];
	selectedBlocks = [];
	timer = 0;

	do{
		targetBlocks=[]
		var in1 = parseInt((Math.random() * 9));
		var in2 = parseInt((Math.random() * 9));
		var in3 = parseInt((Math.random() * 9));

	} while(in1==in2||in2==in3||in1==in3);
	targetBlocks.push(in1);
	targetBlocks.push(in2);
	targetBlocks.push(in3);	

	timer=setTimeout(setTargetToShow, interval);

}

function setTargetToShow(){
	var blocknormal = $$(".block");
	$("state").innerHTML = "Memorize";

	for(var i=0 ; i<targetBlocks.length ; i++){
		var tb = targetBlocks[i];
		blocknormal[tb].addClassName("target");
	}
	console.log(targetBlocks);
	/*
	for (var i = 0; i < blocknormal.length; i++) {
			blocknormal[i].addClassName("target");
		}*/
	//alert(tb);
	timer = setTimeout(showToSelect, interval);
}

function showToSelect(){
	var blocknormal = $$(".block");
	$("state").innerHTML = "Select";
	for(var i=0 ; i<targetBlocks.length ; i++){
		var tb = targetBlocks[i];
		blocknormal[tb].removeClassName("target");
	}
	//selectedBlocks = array(3);

	var flag=0;

	for(var i=0 ; i < numberOfBlocks ; i++){

		blocknormal[i].observe("click", function(){
			var blocknormal = $$(".block");
			
			var num = this.getAttribute("data-index");
				
			if(selectedBlocks.length < 3){
				for(var i=0 ; i < selectedBlocks.length ; i++){
					if(selectedBlocks[i]==this.readAttribute("data-index")) flag=1;
				}
				if(flag!=1){
					blocknormal[num].addClassName("selected");
				selectedBlocks.push(num);

				}
				flag=0;
			}

			//console.log(selectedBlocks);
		});
	}

	

	timer=setTimeout(selectToResult, interval);
}

function selectToResult(){
	console.log("got in to last");
	console.log(selectedBlocks);
	var blocknormal = $$(".block");
	$("state").innerHTML = "Checking!";
	for(var i=0 ; i<selectedBlocks.length ; i++){
		var tb = selectedBlocks[i];
		//console.log(tb);
		blocknormal[tb].removeClassName("selected");
	}

	for(var i=0 ; i<9 ; i++){
		$$(".block")[i].stopObserving("click", this.clickHandler);
	}
	var cnt1=0;

	for(var i=0 ; i<3 ; i++){
		for(var j=0 ; j<selectedBlocks.length ; j++){
			if(selectedBlocks[j]==targetBlocks[i]) cnt1++;
		}
	}
	var splited_ans = $("answer").innerHTML.split("/");

	var cnt2 = parseInt(splited_ans[1]) + 3;

	$("answer").innerHTML = (cnt1+parseInt(splited_ans[0]))+"/"+cnt2;

	timer = setTimeout(startToSetTarget, interval);
}
