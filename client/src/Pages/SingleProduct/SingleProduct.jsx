import React, {useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { AddToCart } from '../../utils/AddToCart';
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, Input, OutlinedInput, TextField } from '@mui/material';
import './SingleProduct.css'

function SingleProduct() {
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    // const [user, setUser] = useState("");
    let userId = '642ab025374b2307605761e0';

    useEffect(() => {
        async function getProductById() {
            axios.get(`http://localhost:5001/product/${id}`).then((res) => {
                setProduct(res.data.product) 
            }).catch((error) => {
                alert(error)
            })
        }
        getProductById()
    }, [id])

    return (
        <div className='container'>
            <p className="page-title mb-5">Product Details</p>
            <div className='row'>
                <div className='col-xl-5' style={{padding: '50px'}}>
                    <img className='img-fluid' width='300px' src={product?.imagePath} alt='product'/>
                </div>
                <div className='col-xl-7 p-3'>
                    <div className='product-details-area'>
                        <h2>{product?.name}</h2>
                        <p className='mt-4 text-justify'>{product?.description}</p>
                        <h3>Rs.{product?.price}</h3>
                        <div className='row mt-5'>
                            <div className='col-xl-6'>
                                <OutlinedInput
                                    type="number"
                                    value={quantity}
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    onChange={(e) => {setQuantity(e.target.value) }}
                                    slotProps={{
                                        input: {min: 1},
                                    }}
                                />
                            </div>
                            <div className='col-xl-6'>
                                <Button
                                    className='px-4 py-2 mt-2'
                                    onClick={()=>AddToCart(product._id, userId,quantity)}
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