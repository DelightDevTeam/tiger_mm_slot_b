import React from "react";
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../assets/css/login.css'

// import logo from '../assets/img/logo.png'

const Register = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-5">

                <div style={{ background: '#431e77', color: '#d0c7dd', borderRadius: '50px' }} className="py-2 py-sm-5 px-3 logins">
                    {/* <div className="d-flex justify-content-center logins">
                    <img src={logo} alt="" />
                </div> */}
                    <div className="text-center">
                        <h5 className="gradient-text py-3">အကောင့်အသစ်ဖွင့်ရန်</h5>
                    </div>

                    <Form className="mx-2" style={{ color: '#7d64a0' }}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontSize: '14px' }}>အမည်</Form.Label>
                            <Form.Control type="text" className="inputs" placeholder="အမည်ထည့်ပါ" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>လျှိ၀ှက်နံပါတ်</Form.Label>
                            <Form.Control type="password" className="inputs" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>လျှိ၀ှက်နံပါတ် အတည်ပြုပါ</Form.Label>
                            <Form.Control type="password" className="inputs" placeholder="Password" />
                        </Form.Group>

                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className="d-block w-100" style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }}>
                                ဆက်လုပ်မည်
                            </Button>
                        </div>

                        <div className="text-center mt-4 mb-4 mb-sm-0">
                            <span style={{ fontSize: '12px' }}>အကောင့်ရှိပြီးသားလား?  <Link to='/login'>အကောင့်ဝင်ပါ</Link> </span>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Register