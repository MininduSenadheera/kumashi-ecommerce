import React from 'react'
import './ProductCard.css'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import { AddToCart } from '../../utils/AddToCart';

function ProductCard(props) {
    // const [user, setUser] = useState("");
    let userId = '642ab025374b2307605761e0';

    return (
        <div className="product-card">
            <img src={props.product.imagePath} alt="product" /><br></br>
            <hr></hr>
            <Link to={`/product/${props.product._id}`}><h7>{props.product.name}</h7></Link>
            <div className="d-flex justify-content-between">
                <h6 className="mt-2">Rs.{props.product.price}</h6>
                <IconButton
                    onClick={()=>AddToCart(props.product._id, userId,1)}
                    aria-label="delete"
                >
                    <ShoppingCartIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ProductCard