"use strict"
window.onload = function () {
    var stack = [];
    var displayVal = "0";
    for (var i in $$('button')) {
        $$('button')[i].onclick = function () {
            var value = this.innerHTML;
            if(value >= '0' && value <= '9'){
                if(displayVal == "0"){
                    displayVal = value - '0';
                }
                else{
                    displayVal = displayVal.toString() + (value - '0');
                }
            }
            else if(value == "AC"){
                displayVal = "0";
                document.getElementById("expression").innerHTML = "0";
                stack = [];
            }
            else if(value == "."){
                if(displayVal.indexOf('.') == -1){
                    displayVal = displayVal.toString() + ".";
                }
            }
            else{
                var s = stack.pop();
                var val = stack.pop();
                
                if(s == "*" || s == "/" || s == "^"){
                    stack.push(parseFloat(highPriorityCalculator(s, val)));
                }
                else if(s == "!"){
                    stack.push(factorial(val));
                }
                else{
                    stack.push(val);
                    stack.push(s);
                }

                if(document.getElementById("expression").innerHTML == "0"){
                    document.getElementById("expression").innerHTML = displayVal.toString() + value;
                }
                else{
                    document.getElementById("expression").innerHTML = document.getElementById("expression").innerHTML + displayVal.toString() + value;
                }
                stack.push(displayVal.toString());
                stack.push(value);
                displayVal = "0";
            }
            document.getElementById('result').innerHTML = displayVal;
        };
    }
};
function factorial (x) {
    if (x < 0) {
        return -1;
    }
    else if (x == 0) {
        return 1;
    }
    else {
        return (x * factorial(x - 1));
    }
}
function highPriorityCalculator(s, val){
    if(s == "*"){
        return val * document.getElementById('result').innerHTML;
        //alert(val*document.getElementById('result').innerHTML);
    }
    else if(s == "/"){
        return val / document.getElementById('result').innerHTML;
    }
    else if(s == "^"){
        return Math.pow(val, document.getElementById('result').innerHTML);
    }
}
function calculator(s) {
    var result = 0;
    var operator = "+";
    for (var i=0; i< s.length; i++) {
        
    }
    return result;
}
