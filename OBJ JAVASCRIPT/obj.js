const student = {
    name : 'Shamim',
    id:125,
    address:'Dhaka',
    isSingle:true,
    friends:['Rakib','Shihab','Mukul'],
    car:{
        brand:'tesla',
        price:50000000,
        made:2024,
        manuFacturer:{
            name:'tesla',
            CEO : 'Elon Mask',
            country : 'USA'

        }
    }
}

console.log(student.friends);


//=============


function add(num1, num2){
    console.log(num1,num2);
    console.log(arguments[4]);
}

add(20,45,54,64,48,78)