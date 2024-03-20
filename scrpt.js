
let global = 4;

function1();
function2();

function function1(){
    let x = 1;
    console.log(x);
    console.log(global);
}
function function2(){
    let x = 2;
    console.log(x);
    console.log(global);
}
// bbonus project-creating a temperature conversion app

const textbox = document.getElementById(`textbox`);
const toFarenheit = document.getElementById(`toFarenheit`);
const toCelcius = document.getElementById(`toCelcius`);
const result = document.getElementById(`result`);

let temp;

function convert(){
    if(toFarenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `The value is ${temp.toFixed(1)} degrees Farenheit `;
    }
    else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `The value is ${temp.toFixed(1)} degrees Celcius `;
    }
    else {
        result.textContent = `You did not choose a unit`;
    }
}