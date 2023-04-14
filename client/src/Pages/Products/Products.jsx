import React, {useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'
import axios from 'axios'
import './Products.css'

function Products() {
    const [allProducts, setAllProducts] = useState([])
    const location = useLocation()
    const { category } = useParams()

    useEffect(() => {
        getAllProducts()
    }, [location])

    async function getAllProducts() {
      axios.get(`http://localhost:5001/product/`).then((res) => {
        setAllProducts(res.data)  
      }).catch((error) => {
        alert(error)
      })
    }
    
    return (
        <div className="row">
            <div className="col-xl-2 d-flex flex-column">
                <Link to='/products/all'>All categories</Link>
                <Link to='/products/Plumbing'>Plumbing</Link>
                <Link to='/products/Electrical'>Electrical</Link>
                <Link to='/products/Gardening'>Gardening</Link>
                <Link to='/products/Carpentry'>Carpentry</Link>
            </div>
            <div className="col-xl-10">
                {category !== 'all' && (<p className="page-title">{category}</p>)}
                {category === 'all' ? (
                    <img className="category-image-lg" src='/images/all_products.png' alt='All products'/>
                ) : category === 'plumbing' ? (
                    <img className="category-image-lg" src='/images/plumbing.png' alt='All products'/>
                ) : category === 'electrical' ? (
                    <img className="category-image-lg" src='/images/electrical.png' alt='All products'/>
                ) : category === 'gardening' ? (
                    <img className="category-image-lg" src='/images/gardening.png' alt='All products'/>
                ) : category === 'carpentry' ? (
                    <img className="category-image-lg" src='/images/carpentry.png' alt='All products'/>
                ) : null}
                
                {category === 'all' ? (
                    <div>
                        <div className="mt-5">
                            <p className="page-title">Categories</p>
                            <div className="product-grid mx-5 px-5">
                                <div className="category-card"> 
                                    <Link to='/products/Plumbing'>
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="category-image" src='/images/plumbing.png' alt='plumbing' />
                                            <b>Plumbing</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="category-card"> 
                                    <Link to='/products/Electrical'>
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="category-image" src='/images/electrical.png' alt='electrical' />
                                            <b>Electrical</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="category-card"> 
                                    <Link to='/products/Gardening'>
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="category-image" src='/images/gardening.png' alt='Gardening' />
                                            <b>Gardening</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="category-card"> 
                                    <Link to='/products/Carpentry'>
                                        <div className="d-flex flex-column align-items-center">
                                            <img className="category-image" src='/images/carpentry.png' alt='Carpentry' />
                                            <b>Carpentry</b>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="page-title">All Products</p>
                            <div className="product-grid">
                                {allProducts.map(product => {
                                    return (<ProductCard product={product} />)
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="product-grid mt-5 px-5 mx-5">
                        {allProducts.filter(product => product.category === category).map(product => {
                            return ( <ProductCard product={product} />)
                        })}
                    </div> 
                )}
                
            </div>
        </div>
        
    )
}

export default Products