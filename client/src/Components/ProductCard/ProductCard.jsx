import React,{useEffect, useState} from 'react'
import './ProductCard.css'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
//import {AddToCart} from './../../../Utils/CartUtils'

function ProductCard(product) {
    const [user, setUser] = useState("");

    useEffect(() => {

    })
    
    return (
        <div className="product-card">
            <img src='images/placeholder.jpg' className="mb-2" alt="product" /><br></br>
            <Link to=""><h7>Product Name</h7></Link>
            <div className="d-flex justify-content-between">
                <h6 className="mt-2">Rs.00.00</h6>
                <IconButton
                    //onClick={() => AddToCart(props.product._id, user._id)}
                    aria-label="delete"
                >
                    <ShoppingCartIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ProductCard