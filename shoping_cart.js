const products = [
    {name : 'Shirt', price : 800, color:'Black',Quantity: 5,},
    {name : 'pant', price : 900, color:'Black',Quantity: 4},
    {name : 'T-shirt', price : 300, color:'Black',Quantity: 8},
    {name : 'Hoodie', price : 1000, color:'Black',Quantity: 3},
    ]



    function cartTotal(products){
        let total = 0;
        for(const product of products){
            const thisProductCost = product.price * product.Quantity;
            total = total +thisProductCost;
          
        }
        return total;
    }

    const shoppingCost =  cartTotal(products);
    console.log(shoppingCost);