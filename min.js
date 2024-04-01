const prices = [15000,16000,20000,25000,12000,100000,50000,75000,35000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
     

    }

    return min;
}
const cheap = getMin(prices);
console.log('Cheapest One : ', cheap);