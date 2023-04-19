import axios from "axios";

export const AddToCart = (productId, userId, quantity) => {
    
    let products = []
    
    const config = {
        headers: {
            "content-Type": "application/json",
        }
    };

    
    axios.get(`http://localhost:5001/cart/user/${userId}`).then((res) => {
        if (res.data.data != null) {
            products = res.data.data.products
            
            if (products.map((product) => { return (product.productId._id === productId) }).includes(true)) {
                return alert("Product already in Cart")
            }
        } 

        products.push({ productId, quantity })

        axios.post("http://localhost:5001/cart/add", { userId, products } , config).then((res)=>{
            alert("Product Added to Cart")
        }).catch((error)=>{         
            console.log(error)          
        })
    }).catch((error)=>{         
        console.log(error)           
    })
}