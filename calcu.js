const display= document.getElementById("input")


function buttonValue(value) {
    display.value += value;
    console.log(display.value);
}

function buttonDel(value) {
    display.value= display.value.slice(0,-1)
}

function buttonDelAll(value) {
    display.value='';
}

function name(params) {
    
}
function buttonEqual(value) {
    let result= eval(display.value);
    display.value=result
    console.log(result);
}

