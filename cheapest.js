// const phones = [
//     {name :'samsung', price : 20000, camera : '48mp', color:'Black'},
//     {name :'xoami', price : 25000, camera : '48mp', color:'Black'},
//     {name :'oppo', price : 30000, camera : '48mp', color:'Black'},
//     {name :'I-phone', price : 200000, camera : '48mp', color:'Black'},
//     {name :'walton', price : 12000, camera : '48mp', color:'Black'},
//     {name :'HTC', price : 10000, camera : '48mp', color:'Black'}
// ];

// function getCheapPhone(phones){
//     let min =phones[0];
//   for(const phone of phones){
//     if(phone.price < min.price){
//         min = phone;
//     }
  
//   }

//   return min;
// }


// const cheap = getCheapPhone(phones);
// console.log('Cheapest Phone : ', cheap);


//========MAX============<<<<<<<<<<<<<>>>>>>>>>>>>>>>>><<<<<<<<<<>>>>>>>>>>>>>>>

const phones = [
    {name :'samsung', price : 20000, camera : '48mp', color:'Black'},
    {name :'xoami', price : 25000, camera : '48mp', color:'Black'},
    {name :'oppo', price : 30000, camera : '48mp', color:'Black'},
    {name :'I-phone', price : 200000, camera : '48mp', color:'Black'},
    {name :'walton', price : 12000, camera : '48mp', color:'Black'},
    {name :'HTC', price : 10000, camera : '48mp', color:'Black'}
];

function getCheapPhone(phones){
    let max =phones[0];
  for(const phone of phones){
    if(phone.price >  max.price){
        max = phone;
    }
  
  }

  return max;
}


const max = getCheapPhone(phones);
console.log('Miximum Phone Price  : ', max);