import React, {useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';
import './SingleProduct.css'

function SingleProduct() {
    const [product, setProduct] = useState()
    const { id } = useParams()

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