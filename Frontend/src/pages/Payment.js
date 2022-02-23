import React, { useState } from 'react'
import { Navbar, Form, Button, Card } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';


const Payment = () => {

    const [userPaymentInfo, setUserPaymentInfo] = useState({
        userId: localStorage.getItem('token'), paymentHeading: '', paymentContent: '', paymentImage: '', status: '1', dateTime: new Date()
    })

    const HandlShow = (e) => {
        const { name, value } = e.target

        setUserPaymentInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const paymentReq = (e) => {
        e.preventDefault()
        const { userId, paymentHeading, paymentContent, paymentImage, status, dateTime } = userPaymentInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, paymentHeading, paymentContent, paymentImage, status, dateTime
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/paymentReq", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.mess === 'Successfully'){
                    alert('Successfully')
                }
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Payment</Navbar.Brand>
                </Navbar>
            </div>

            <div>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Payment Heading " name='paymentHeading' value={userPaymentInfo.paymentHeading} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Payment Content" name='paymentContent' value={userPaymentInfo.paymentContent} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Payment Images</Form.Label>
                            <Form.Control type="file" name='paymentImage' value={userPaymentInfo.paymentImage} onChange={HandlShow} multiple />
                        </Form.Group>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Button variant="primary" style={{ width: '13rem' }} type="submit" onClick={(e) => paymentReq(e)}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Payment