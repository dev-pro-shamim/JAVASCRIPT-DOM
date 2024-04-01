
function layedDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity *first100Price;
       return total;
      

    }else if(quantity <= 200){
        const first100total = 100*first100Price;
        const remainingQuantity = quantity -100;
        const remainingtotal = remainingQuantity + second100Price;
        const total = first100total + remainingtotal;
        return total;

    }else{
        const first100total = 100*first100Price;
        const second100total = 100*second100Price;
        const remainingQuantity= quantity - 200;
        const remainingtotal = remainingQuantity * above200Price;
        const total = first100total + second100total + remainingtotal;

    }

}

const total = layedDiscountedTotal(total);
console.log(total);