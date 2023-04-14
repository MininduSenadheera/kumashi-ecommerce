import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/HighlightOff';
import './Cart.css'

function Cart() {
    const [cart, setCart] = useState();

    useEffect(() => {
        getCartByUserId()
    }, [])

    async function getCartByUserId(){
        await axios.get(`http://localhost:5001/cart/userId`).then((res)=>{
            setCart(res.data)
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

        if(window.confirm('Are you sure?\n')){
            await axios.delete(`http://localhost:5001/cart/${cart._id}`, config).then(() => {
                alert('Cart cleared successfully')
            }).catch((error) => {
                alert(error.message)
            })
        }
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
                                <th scope='col'>Price</th>
                                <th scope='col'>Quantity</th>
                                <th scope='col'>Subtotal</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='p-5 align-middle'>
                                <td className='text-start'>
                                    <div className="row">
                                        <div className="col-4">
                                            <img alt='product' src='images/placeholder.jpg'></img>
                                        </div>
                                        <div className="col-8">
                                            <h4>Product Name</h4>
                                            <p>Brand:</p>
                                            <p>Type:</p>
                                        </div>
                                    </div> 
                                </td>
                                <td>
                                    <p>Rs.00.00</p>
                                </td>
                                <td>
                                    <p>Quantity</p>
                                </td>
                                <td>
                                   <p>Rs.00.00</p>
                                </td>
                                <td>
                                    <IconButton aria-label="delete">
                                        <CancelIcon />
                                    </IconButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-6">
                            <button className='mt-5 btn-fill'>
                                Continue Shopping
                            </button>
                        </div>
                        <div className="col-6">
                            <button className='mt-5 btn-clear' onClick={clearCart()}>
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 px-5">
                    <div className="cart-card">
                        <div className="title mb-5"> Cart Total </div>
                        <div className="row my-5">
                            <div className="col-6">
                                Subtotal
                            </div>
                            <div className="col-6">
                                Rs.00.00
                            </div>
                            <div className="col-12">
                                <hr></hr>
                            </div>
                            <div className="col-6">
                                Total amount
                            </div>
                            <div className="col-6">
                                Rs.00.00
                            </div>
                        </div>
                        <Link to="/checkout" >
                            <button className='mt-5 btn-checkout'>
                               Proceed to checkout
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart