import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import '../assets/css/login.css'
import Spinner from "../components/Spinner";
import BASE_URL from "../hooks/baseURL";

// import logo from '../assets/img/logo.png'

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    let auth = localStorage.getItem("token");
    

    useEffect(() => {
        if (!auth) {
          navigate("/login");
        }
    }, [navigate]);

    const changePassword = async (e) => {
        e.preventDefault();
        setLoader(true);
        
        const data = {
            current_password: oldPassword,
            password: password,
            password_confirmation: confirmPassword,
        };

        try {
            const response = await fetch(BASE_URL + '/changePassword', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(data),
            });
      
            const responseData = await response.json();
      
            if (!response.ok) {
              if (response.status === 422) {
                setErrors(responseData?.errors && responseData?.errors);
                console.log(errors && errors);
              } else if (response.status === 401) {
                setError(responseData.message);
                console.log(error);
                setTimeout(() => {
                  setError('');
                }, 3000);
              } else {
                console.error(`Unexpected error with status ${response.status}`);
              }
            } else {
              setSuccess('New Password Changed Successfully.');
              setPassword('');
            //   navigate('/login');
              setConfirmPassword('');
              setTimeout(() => {
                setSuccess('');
              }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <>
            <div className="mt-sm-5 m d-flex justify-content-center align-items-center mb-5">

                <div style={{ background: '#431e77', color: '#d0c7dd', borderRadius: '50px' }} className="py-5 px-3 logins">
                    {/* <div className="d-flex justify-content-center logins">
                    <img src={logo} alt="" />
                </div> */}
                    <div className="text-center">
                        <h5 className="gradient-text py-3">Change Password</h5>
                    </div>
                    {success && <Alert variant="success">{success}</Alert>}
                    {error && <Alert variant="danger">*{error}</Alert>}
                    <Form className="mx-2" style={{ color: '#7d64a0' }} onSubmit={changePassword}>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>လက်ရှိ လျှိ၀ှက်နံပါတ်</Form.Label>
                            <Form.Control 
                            type="password" 
                            className="inputs"
                            placeholder="Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            />
                            {errors?.current_password && <span className="text-danger d-block">{errors?.current_password}</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>လျှိ၀ှက်နံပါတ် အသစ်</Form.Label>
                            <Form.Control 
                            type="password" 
                            className="inputs" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors?.password && <span className="text-danger d-block">{errors?.password}</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontSize: '14px' }}>လျှိ၀ှက်နံပါတ်အသစ်ကို အတည်ပြုပါ</Form.Label>
                            <Form.Control 
                            type="password" 
                            className="inputs" 
                            placeholder="Password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}    
                            />
                            {errors?.password_confirmation && <span className="text-danger d-block">{errors?.password_confirmation}</span>}
                        </Form.Group>

                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className="d-flex justify-content-center w-100" style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }}>
                            {loader && 
                                    <div className="me-2">
                                        <Spinner />
                                    </div>
                                }
                            <span className="d-block">ဆက်လုပ်မည်</span>
                            </Button>
                        </div>

                        {/* <div className="text-center mt-4">
                        <span style={{fontSize:'12px'}}>အကောင့်ရှိပြီးသားလား?  <Link to='/login'>အကောင့်ဝင်ပါ</Link> </span>
                    </div> */}
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ChangePassword