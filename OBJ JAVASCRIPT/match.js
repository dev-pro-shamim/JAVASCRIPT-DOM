//const numbers = [6,87,9,5,44,44,87];
// for(i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }

//================

const products = [
    {id : 1, name : 'Xiami Phone', price : 15000},
    {id : 2, name : 'samsung', price : 15000},
    {id : 3, name : 'item', price : 22000},
    {id : 4, name : 'iphone', price : 15000},
    {id : 5, name : 'Walton laptop', price : 12000},
    {id : 6, name : 'Lenovo pad', price : 20000},
    {id : 7, name : 'Oppo', price : 25000},
]

// for( const product of products){
//     console.log(product);
// }


function matchedProducts(products , search){
    const matched = [];
    // for( const product of products){
    //     console.log(product.name.includes(search));
    // }
  for(const product of products){
    if(product.name.toLowerCase().includes(search)){
        matched.push(product)
    }
  }
return matched;
}

const result = matchedProducts(products,'laptop');
console.log(result);