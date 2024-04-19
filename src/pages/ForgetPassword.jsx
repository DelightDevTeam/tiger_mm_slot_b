import React from "react";
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../assets/css/login.css'

// import logo from '../assets/img/logo1.png'

const ForgetPassword = () => {
    return (
        <>
            <div className="mt-5 d-flex justify-content-center align-items-center mb-5">

                <div style={{ background: '#431e77', color: '#d0c7dd', borderRadius: '50px' }} className="py-5 px-3">
                    {/* <div className="d-flex justify-content-center logins">
                    <img src={logo} alt="" />
                </div> */}
                    <div className="text-center my-3">
                        <h5 className="gradient-text py-2">Forget Password</h5>
                    </div>

                    <Form className="mx-2" style={{ color: '#7d64a0' }}>

                        {/* <Form.Group className="mb-3">
                        <Form.Select >
                        <option value="1"><img src={flag} alt="" /></option>
                        </Form.Select>
                    </Form.Group> */}
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontSize: '14px' }}>ဖုန်းနံပါတ်</Form.Label>
                            <Form.Control type="text" className="inputs" placeholder="03123456789" />
                        </Form.Group>


                        <div className="d-flex justify-content-center my-3">
                            <Button variant="primary" type="submit" className="d-block w-100" style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }}>
                                ဆက်လုပ်မည်
                            </Button>
                        </div>

                        <div className="text-center mt-4">
                            <span style={{ fontSize: '12px' }}>အကောင့်ရှိပြီးသားလား?  <Link to='/login'>အကောင့်ဝင်ပါ</Link> </span>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ForgetPassword