let M = 0;


//get number
function digit(num) {
    var result = document.getElementById("disp");
    result.value += num;
}

//get result
function result() {
    try {
        var result = document.getElementById("disp");
        if (result.value.match('log') != "") {
            let text = result.value;
            result.value = result.value.replace(/log/g, "Math.log");
        }
        if (result.value.match('log10') != "") {
            let text = result.value;
            result.value = result.value.replace(/log10/g, "log10");
        }
        if (result.value.match('pow') != "") {
            let text = result.value;
            result.value = result.value.replace(/pow/g, "Math.pow");
        }
        if (result.value.match('sqrt') != "") {
            let text = result.value;
            result.value = result.value.replace(/sqrt/g, "Math.sqrt");
        }
        if (result.value.match('abs') != "") {
            let text = result.value;
            result.value = result.value.replace(/abs/g, "Math.abs");
        }
        if (result.value.match('sin') != "") {
            let text = result.value;
            result.value = result.value.replace(/sin/g, "Math.sin");
        }
        if (result.value.match('cos') != "") {
            let text = result.value;
            result.value = result.value.replace(/cos/g, "Math.cos");
        }
        if (result.value.match('tan') != "") {
            let text = result.value;
            result.value = result.value.replace(/tan/g, "Math.tan");
        }
        if (result.value.match('ceil') != "") {
            let text = result.value;
            result.value = result.value.replace(/ceil/g, "Math.ceil");
        }
        if (result.value.match('floor') != "") {
            let text = result.value;
            result.value = result.value.replace(/floor/g, "Math.floor");
        }
        result.value = eval(result.value);
    }
    catch (err) {
        result.value = undefined;
    }
}

//clear screen
function clearScreen() {
    var result = document.getElementById("disp");
    result.value = "";
}

//delete last letter
function del() {
    var number = document.getElementById("disp");
    var remove = number.value;
    remove = remove.slice(0, -1);
    number.value = remove;
}

//negative-positive number
function negpos() {
    var number = document.getElementById("disp");
    number.value = number.value * (-1);
}

//natural log
function natLog() {
    var result = document.getElementById("disp");
    result.value += 'log(';
}

//log 
function logVal() {
    var result = document.getElementById("disp");
    result.value += 'log10(';
}

//10 to the power x
function tentoX() {
    var result = document.getElementById("disp");
    result.value += 'pow(10,';
}

//factorial
function factorial() {
    var result = document.getElementById("disp");
    let answer = 1;
    if (result.value == 0 || result.value == 1) {
        result.value = answer;
    }
    else if (result.value > 1) {
        for (var i = result.value; i >= 1; i--) {
            answer = answer * i;
        }
        result.value = answer;
    }
}

//square root
function sqrt() {
    var result = document.getElementById("disp");
    result.value += 'sqrt(';
}

//mod function
function mod() {
    var result = document.getElementById("disp");
    result.value += 'abs(';
}

//square function
function square() {
    var result = document.getElementById("disp");
    let answer = result.value * result.value;
    result.value = answer;

}

//euler value
function euler() {
    var result = document.getElementById("disp");
    let e = 2.71828;
    result.value += e;
}

//pi value
function pi() {
    var result = document.getElementById("disp");
    result.value += Math.PI;
}

//sin value
function sin() {
    var result = document.getElementById("disp");
    result.value += 'sin(';
}

//cos value
function cos() {
    var result = document.getElementById("disp");
    result.value += 'cos(';
}

//tan value
function tan() {
    var result = document.getElementById("disp");
    result.value += 'tan(';
}

//absolute value
function abs() {
    var result = document.getElementById("disp");
    result.value += 'abs(';
}

//ceil value
function ceil() {
    var result = document.getElementById("disp");
    result.value += 'ceil(';
}

//floor value
function floor() {
    var result = document.getElementById("disp");
    result.value += 'floor(';
}

//degree value
function deg() {
    var result = document.getElementById("disp");
    let rad = result.value;
    let deg = rad * 180 / Math.PI;
    result.value = deg;
}

//M+ function
function mp() {
    var result = document.getElementById("disp");
    M = M + Number(result.value);
    result.value = M;
}

//M- function
function mm() {
    var result = document.getElementById("disp");
    M = M - Number(result.value);
    result.value = M;
}

//MS function
function ms() {
    var result = document.getElementById("disp");
    M = M + Number(result.value);
}

//MR function
function mr() {
    var result = document.getElementById("disp");
    result.value = M;
}

//MC function
function mc() {
    M = 0;
}

//Fixed exponential
function fe() {
    var result = document.getElementById("disp");
    var exp = parseFloat(result.value);
    result.value = exp.toExponential(4);
}