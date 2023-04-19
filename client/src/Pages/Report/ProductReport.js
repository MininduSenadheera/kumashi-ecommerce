import React,{useRef, useState, useEffect} from 'react';
import { useReactToPrint } from "react-to-print";
import { Button } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import './ProductReport.css';

function ProductReport() {
    const [allProducts, setAllProducts] = useState([])
    const componentRef = useRef();

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    useEffect(() => {
        getAllProducts()
    }, [])

    async function getAllProducts() {
      axios.get(`http://localhost:5001/product/`).then((res) => {
        setAllProducts(res.data) 
      }).catch((error) => {
        alert(error)
      })
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div class="container">
            <div id="report" ref={componentRef}>
                <div class="mt-5 mb-3 d-flex justify-content-between">
                    <h3 className="page-title">Products Report - {`${date}/${month}/${year}`}</h3>
                    <h3 className="page-title">Count - {allProducts.length}</h3>
                </div>
                
                <table className="table cart-table table-borderless">
                    <thead>
                        <tr>
                            <th scope='col'>Product</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Unit Price</th>
                            <th scope='col'>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allProducts?.map((product) => {
                        return (
                            <tr className='p-5 hover align-middle'>
                                <td>
                                    <p>{product.name}</p>
                                </td>
                                <td>
                                    <p>{product.category}</p> 
                                </td>
                                <td>
                                    <p>Rs.{product.price}.00</p>
                                </td>
                                <td>
                                    <p>{product.stock}</p>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <hr></hr>
            <Button variant="contained" className="mb-4" disableElevation size="large" onClick={handlePrint}
                style={{ color: 'white' }} endIcon={<CloudDownloadIcon/>}>
                Download Report
            </Button>
        </div>
    )
}
export default ProductReport