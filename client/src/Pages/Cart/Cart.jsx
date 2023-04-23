import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/HighlightOff';
import './Cart.css'

function Cart() {
    const [cart, setCart] = useState();
    const [total,setTotal] = useState();
    const navigate = useNavigate()
    let user = '642ab025374b2307605761e0';

    useEffect(() => {
        getCartByUserId()
    }, [])

    async function getCartByUserId(){
        await axios.get(`http://localhost:5001/cart/user/${user}`).then((res) => {
            let tempTotal = 0
            res.data.data?.products.map((product) => (
                tempTotal = tempTotal + (product.quantity * product.productId.price)
            ))

            setTotal(tempTotal)

            setCart(res.data.data)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    async function clearCart(){
        const config = {
            headers: {
                "content-Type": "application/json"
            },
        };

        await axios.delete(`http://localhost:5001/cart/${cart._id}`, config).then(() => {
            alert('Cart cleared successfully')
        }).catch((error) => {
            alert(error.message)
        })
    }

    async function removeItem(itemId){
        const config = {
          headers: {
            "content-Type": "application/json"
          }
        };

        cart.products = cart.products.filter(element => element._id !== itemId)

        await axios.put(`http://localhost:5001/cart/`, cart, config).then((res) => {
            alert("Product removed from cart successfully")
            getCartByUserId()
        }).catch((error) => {
            alert(`Failed to remove the product`)
        })
    }

    return (
        <div className="container-fluid">
            <div className="page-title mb-5">Shopping Cart</div>
            <div className="row">
                <div className="col-xl-8 px-5">
                    <table className="table cart-table table-borderless">
                        <thead >
                            <tr>
                                <th scope='col'>Product</th>
                                <th scope='col'>Unit Price</th>
                                <th scope='col'>Quantity</th>
                                <th scope='col'>Subtotal</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart?.products?.map((product) => {
                            return (
                                <tr className='p-5 align-middle'>
                                    <td className='text-start'>
                                        <div className="row">
                                            <div className="col-4">
                                                <img alt='product' src={product.productId.imagePath}></img>
                                            </div>
                                            <div className="col-8">
                                                <h4>{product.productId.name}</h4>
                                                <p>Type:{product.productId.category}</p>
                                            </div>
                                        </div> 
                                    </td>
                                    <td>
                                        <p>Rs.{product.productId.price}.00</p>
                                    </td>
                                    <td>
                                        <p>{product.quantity}</p>
                                    </td>
                                    <td>
                                        <p>Rs.{product.productId.price * product.quantity}.00</p>
                                    </td>
                                    <td>
                                        <IconButton aria-label="delete" onClick={() => removeItem(product._id)}>
                                            <CancelIcon />
                                        </IconButton>
                                    </td>
                                </tr> 
                            )
                        })}
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-6">
                            <Link to='/products/all'>
                                <button className='mt-5 btn-fill'>
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                        <div className="col-6">
                            <button className='mt-5 btn-clear' onClick={() => clearCart(cart._id)} >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 px-5">
                    <div className="cart-card">
                        <div className="title mb-5"> Cart Total </div>
                            <p> Total amount </p>
                            <h3> Rs.{total}.00 </h3>
                        <Link to={`/checkout/${cart?._id}`} >
                            <button className='mt-5 btn-checkout'> Proceed to checkout </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart