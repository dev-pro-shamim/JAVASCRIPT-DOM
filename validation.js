function multiply(num1, num2){

    if(typeof num1 !== 'number'){
        console.log('Enter Number Value');

    }

 
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5,8);
console.log(result);



