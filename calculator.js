const num1 = parseFloat(prompt('Enter number1: '));
const num2 = parseFloat(prompt('Enter numberr2: '));

const operator = prompt('Select operator(+,-,/,*)')
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Hit Refresh and try again!')
}
else if(operator == '+'){
    result = num1 + num2;
}
else if(operator == '-'){
    result = num1 - num2;
}
else if(operator == '/'){
    result = num1 / num2;
}
else if(operator == '*'){
    result = num1 * num2;
}
alert(num1+operator+num2+'=' + result);

