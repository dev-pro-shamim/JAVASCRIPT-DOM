function shoppingQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirt = 5;
    const perPant = 12;
    const perShoe = 7;


    const shirtpcs = shirtQuantity * perShirt;
    const pantpcs = pantQuantity * perPant;
    const shoepack = shoeQuantity * perShoe;

    const total_shopping = shirtpcs + pantpcs + shoepack;
    return total_shopping;

}

const shopping = shoppingQuantity(15,10,1);
console.log('Total Shopping Quantity : ', shopping);