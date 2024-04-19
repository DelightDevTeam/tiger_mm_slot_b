import React, { useEffect, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import '../assets/css/login.css'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../hooks/baseURL'
import Spinner from '../components/Spinner'

const NewPlayerChangePassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    let auth = localStorage.getItem("token");
    

    useEffect(() => {
        if (auth && passwordChanged === 1) {
          navigate("/login");
        }
    }, [navigate]);

    const changePassword = async (e) => {
        e.preventDefault();
        setLoader(true);
        
        const data = {
            password: password,
            password_confirmation: confirmPassword,
            user_id: localStorage.getItem('auth'),
        };

        try {
            const response = await fetch(BASE_URL + '/player-change-password', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
      
            const responseData = await response.json();
      
            if (!response.ok) {
              if (response.status === 422) {
                setError(responseData?.errors?.password && responseData?.errors?.password[0]);
                console.log(error && error);
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
              navigate('/login');
              setConfirmPassword('');
              setTimeout(() => {
                setSuccess('');
              }, 3000);
              localStorage.removeItem('auth');
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


                <Form className="mx-2" style={{ color: '#7d64a0' }} onSubmit={changePassword}>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: '14px' }}>လျှိ၀ှက်နံပါတ် အသစ်</Form.Label>
                        <Form.Control type="password" 
                        className="inputs"
                        placeholder="Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        
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
                    </Form.Group>

                    <div className="mt-3">
                        <Button variant="primary" type="submit" className="d-flex justify-content-center  w-100" style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }}>
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
  )
}
export default NewPlayerChangePassword