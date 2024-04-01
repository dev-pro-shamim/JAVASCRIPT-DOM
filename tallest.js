const heights = [54,87,68,45,98,87,24,65,66];
function getMax(numbers){
let max = numbers[0];
    
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }

    return max;
}

const max = getMax(heights);
console.log('max value of : ',max);