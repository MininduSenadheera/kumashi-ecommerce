import React, {useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'
import axios from 'axios'
import './Products.css'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function Products() {
    const [allProducts, setAllProducts] = useState([])
    const [isAdmin, setIsAdmin] = useState(true)
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

    function handleSearch(event){
        const searchTerm = event.currentTarget.value
        
        axios.get(`http://localhost:5001/product/`).then((res) => {
            filterContent(res.data, searchTerm.toLowerCase())
        }).catch((error) => {
            alert("Failed to fetch products")
        })
    }

    function filterContent(data, searchTerm){
        const result = data.filter((product) => 
            product.name.toLowerCase().includes(searchTerm) 
        )
        setAllProducts(result)
    }
    
    return (
        <div className="row">
            <div className="col-xl-2">
                <Drawer sx={{ width: 260, flexShrink: 0, '& .MuiDrawer-paper': { width: 260, boxSizing: 'border-box', }, }} variant='permanent' anchor='left'>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MenuIcon/>
                                </ListItemIcon>
                                <Link className='sidebar-text' to='/products/all'>All categories</Link>
                            </ListItemButton>
                        </ListItem>
                        <Link className='sidebar-text' to='/products/Plumbing'>
                            <ListItem>
                                <ListItemButton>Plumbing</ListItemButton> 
                            </ListItem>
                        </Link>
                        <Link className='sidebar-text' to='/products/Electrical'>
                            <ListItem>
                                <ListItemButton> Electrical </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link className='sidebar-text' to='/products/Gardening'>
                            <ListItem>
                                <ListItemButton> Gardening </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link className='sidebar-text' to='/products/Carpentry'>
                            <ListItem>
                                <ListItemButton>  Carpentry </ListItemButton>
                            </ListItem>
                        </Link>
                        {isAdmin && (
                            <Link className='sidebar-text' to='/product_report'>
                                <ListItem>
                                    <ListItemButton>  Product Report </ListItemButton>
                                </ListItem>
                            </Link>
                        )}
                    </List>
                </Drawer>
            </div>
            <div className="col-xl-10">
                {category !== 'all' && (<p className="page-title">{category}</p>)}
                {category === 'all' ? (
                    <img className="category-image-lg" src='/images/all_products.png' alt='All products'/>
                ) : category === 'Plumbing' ? (
                    <img className="category-image-lg" src='/images/plumbing.jpeg' alt='Plumbing'/>
                ) : category === 'Electrical' ? (
                    <img className="category-image-lg" src='/images/Electrical.jpg' alt='Electrical'/>
                ) : category === 'Gardening' ? (
                    <img className="category-image-lg" src='/images/gardening.jpg' alt='Gardening'/>
                ) : category === 'Carpentry' ? (
                    <img className="category-image-lg" src='/images/carpentry.jpg' alt='Carpentry'/>
                ) : null}
                <div className="search mt-5" align="center">
                    <input  
                        type="text" 
                        name="search" 
                        id="search"
                        placeholder="Search Products" 
                        onChange={handleSearch} 
                        required 
                    />  
                </div>
                
                
                {category === 'all' ? (
                    <div>
                        <div className="mt-5">
                            <p className="page-title">Categories</p>
                            <div className="container d-flex justify-content-center">
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
                            <div className="container product-grid">
                                {allProducts.map(product => {
                                    return (<ProductCard product={product} />)
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container product-grid mt-5 px-5 mx-5">
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