import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import './SingleProduct.css'

function SingleProduct() {
    return (
        <div className='container'>
            <p className="page-title mb-5">Product Details</p>
            <div className='row'>
                <div className='col-xl-5' style={{padding: '50px'}}>
                    <img className='img-fluid' width='300px' src='/images/placeholder.jpg' alt='product'/>
                </div>
                <div className='col-xl-7 p-3'>
                    <div className='product-details-area'>
                        <h2>Product Name</h2>
                        <p className='mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum. Mauris iaculis fringilla ex, sit amet semper libero facilisis sit amet. Nunc ut aliquet metus. </p>
                        <h3>Rs.00.00</h3>
                        <div className='row'>
                            <div className='col-xl-6'>

                            </div>
                            <div className='col-xl-6'>
                                <Button
                                    className='px-4 py-2'
                                    style={{ backgroundColor: '#360000ed', color: 'white' }}
                                    startIcon={<ShoppingCartIcon />}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct