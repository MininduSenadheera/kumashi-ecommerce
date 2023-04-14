import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React from 'react'
import './Checkout.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Link } from 'react-router-dom';

function Checkout() {
    return (
        <div className="container mt-5">
            <p className="page-title mb-5">Checkout</p>
            <div className="checkout-card">
                <div className="row">
                    <div className="col-xl-6 p-5">
                        <div style={{ border: '1px solid #D9D9D9', borderRadius: '8px' }} className="p-2 mb-5">
                            <div className="row">
                                <div className="col-xl-3">
                                    <img alt="product" width="100px" src="images/placeholder.jpg" />
                                </div>
                                <div className="col-xl-9">
                                    <p>Product Name</p>
                                    <p>2</p>
                                    <b>Rs.00.00</b>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Product Total</p>
                            <p>Rs.00.00</p>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <p>Delivery charges</p>
                            <p>Rs.00.00</p>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <b>Total</b>
                            <b>Rs.00.00</b>
                        </div>
                    </div>
                    <div className="col-xl-6 card-right">
                        <p className='title mb-5' align="center">Payment</p>
                        <p>Choose payment method</p>
                        <div>
                            <img alt="master-card" width={'60px'} className="img-fluid mx-1" src="images/MasterCard.png"/>
                            <img alt="visa" width={'64px'} className="img-fluid mx-1" src="images/VisaCard.png"/>
                        </div>
                        <form onSubmit={''}>
                            <TextField
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                className="my-3" label="Name on card" size="small" variant="outlined" fullWidth/>
                            <TextField
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                className="my-3" label="Card number" size="small" variant="outlined" fullWidth />
                            <div className="row my-3">
                                <div className="col-xl-4">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateField
                                            label="MM / YY"
                                            inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                            // value={value}
                                            // onChange={(newValue) => setValue(newValue)}
                                            format='MM/YY'
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="col-xl-4">
                                    <TextField
                                        inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                        label="CVV" size="large" variant="outlined"
                                    />
                                </div>
                            </div>
                            <TextField
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                className="my-3" label="Email address" size="small" variant="outlined" fullWidth
                                type='email'
                            />
                            <TextField
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                className="my-3" label="Discount Coupon" size="small" variant="outlined" fullWidth />
                            <FormGroup>
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="default" />}
                                    label="by confirming the order, I accept the terms of the user agreement"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                            <div className="my-3">
                                <Button
                                    type='submit'
                                    size='large'
                                    className='mx-2'
                                    style={{ color: 'white', backgroundColor: '#360000' }}
                                >
                                    Checkout
                                </Button>
                                <Link to="/cart">
                                    <Button
                                        type='reset'
                                        size='large'
                                        className='mx-2'
                                        style={{ color: '#360000', backgroundColor: 'transparent', border: '1px solid #360000' }}
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Checkout