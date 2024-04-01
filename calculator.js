function add(num1, num2){
    return num1+ num2;
}


function subs(num1, num2){
    return num1-  num2;
}

function multi(num1, num2){
    return num1* num2;
}
function div(num1, num2){
    return num1/ num2;
}


function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;

    }
    
    else if(operation === 'subs'){
        const result = subs(a,b);
        return result;
    }
    
    else if(operation ==='multi'){
        const result = multi(a,b);
        return result;
    }

    else if(operation ==='div'){
        const result = div(a,b);
        return result;
    }
else{
    return " Only 'add', 'substract','multiply', 'divided' operation is allowed ";

}

}

const result = calculator(5,8)

console.log(result);