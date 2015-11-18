"use strict"
window.onload = function () {
    var stack = [];
    var displayVal = "0";
    var flag=0;
    var astack = []
    for (var i in $$('button')) {
        $$('button')[i].onclick = function () {
            var value = this.innerHTML;

            if(/^[0-9]$/.test(value)){
                if(displayVal=="0"){
                    displayVal = value;
                    document.getElementById('result').innerHTML = displayVal;
                } 
                else {
                    displayVal += value;
                    document.getElementById('result').innerHTML = displayVal;
                }

            } else if(value=="AC") {
                displayVal="0";
                stack = [];
                astack = [];
                document.getElementById('expression').innerHTML = "0";
                document.getElementById('result').innerHTML = "0";
                
            } else if(value=='.'){
                //displayVal += value;
                var cnt = displayVal.split(".").length;
                if(cnt==1){
                    displayVal += value;
                    document.getElementById('result').innerHTML = displayVal;
                }

            } else {
            	
            	if(document.getElementById('expression').innerHTML == "0"){
            		document.getElementById('expression').innerHTML = displayVal + value;
                    
            	} else if(astack[astack.length-1]=="!"){
                    
                    if(value != "!") document.getElementById('expression').innerHTML += value;
                    else if(value == "!") ;
                    else document.getElementById('expression').innerHTML += (displayVal + value);
            		
            	} else {
                    
            		document.getElementById('expression').innerHTML += (displayVal + value);
            	}
            	
            	
            	
            	if(stack[stack.length-1]=="*"||stack[stack.length-1]=="/"||stack[stack.length-1]=="^"){
            		
            		highPriorityCalculator(stack, displayVal);
            		
            	} else if(stack[stack.length-1]=="!") {
            		
            		displayVal = factorial(stack[stack.length-2]);
            		
            		stack.pop();
            		stack.pop();
            		stack.push(displayVal);
            	} else {
            		stack.push(parseFloat(displayVal));
                    astack.push(parseFloat(displayVal));
            	}
            	
            	if(astack[astack.length-1] =="!"){
                    if(value =="+" || value == "-"){
                        stack.push(value);
                        astack.push(value);
                    }
                                        
                } else {
                    stack.push(value);
                    astack.push(value);
                }
                
                displayVal="0";
                document.getElementById('result').innerHTML = displayVal;
            	
            }
            
            if(value == "=") {
                displayVal = calculator(stack);
                document.getElementById('result').innerHTML = displayVal;
                stack = [];
                astack = [];
                displayVal="0";
            		
            }
        };
       
    }

    
};


function factorial (x) {
    if(x==1 || x==0){
        return 1;
    } else {
        return factorial(x-1) * x;
    }
}

function highPriorityCalculator(s, val) {
	var op = s.pop();
	var pnum = s.pop();
	
	if(op == "*"){
		s.push(pnum * val);
	} else if(op=="/"){
		s.push(pnum/val);
	} else if(op=="^"){
		s.push(Math.pow(pnum, val))
	}	
}

function calculator(s) {
    var result = s[0];
    
    if(s.length == 1){
    	
    } else {
    	for (var i=1; i< s.length; i+=2) {
	        if(s[i]=="+") result += s[i+1];
	        else if(s[i]=="-") result -= s[i+1];
        }
    	
    }
    return result;
}
