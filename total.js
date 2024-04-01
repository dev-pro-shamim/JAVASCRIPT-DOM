const products = [
{name : 'Shirt', price : 800, color:'Black'},
{name : 'pant', price : 900, color:'Black'},
{name : 'T-shirt', price : 300, color:'Black'},
{name : 'Hoodie', price : 1000, color:'Black'},
]

function getshoppingTotal(products){
    let total = 0;
    for(const product of products){
       total = total+ product.price;
    }
return total;

}
const total = getshoppingTotal(products);
console.log('Today total Charge is : ', total);