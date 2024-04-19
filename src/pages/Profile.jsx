import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import '../assets/css/login.css'
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
import Spinner from "../components/Spinner";

const Profile = () => {
    const {data:user} = useFetch(BASE_URL + "/user");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    // const [profile, setProfile] = useState(null);
    const [loader, setLoader] = useState(false);
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        setName(user.name)
        setPhone(user.phone)
        // setProfile(user.profile)
    }, [user])

    // console.log(profile);
    // const handleImage = (e) => {
    //     e.preventDefault();
    //     setProfile(e.target.files[0]);
    // }

    const updateProfile = async (e) => {
        e.preventDefault();
        setLoader(true);
        let inputData = {
            name: name, 
            phone: phone,
            // profile: profile
        }
        console.log(inputData);

        try {
            const response = await fetch(BASE_URL + '/profile', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(inputData),
            });
      
            const responseData = await response.json();
      
            if (!response.ok) {
                if (response.status === 422) {
                  setErrors(responseData?.errors ?? []);
                  console.log(errors);
                //   return;
                } else if (response.status === 401) {
                  const errorMessage = responseData.message;
                  setError(errorMessage);
                  console.log(errorMessage);
                  setTimeout(() => setError(''), 3000);
                } else {
                  console.error(`Unexpected error with status ${response.status}`);
                }
            } else {
                setErrors("")
                setError("")
                setSuccess("Profile Updated Successfully.");
                setTimeout(() => setSuccess(''), 3000);
                console.log(responseData.message);
            }
              
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <div className="mb-5 px-2 py-5 d-flex flex-column  align-items-center">
            <h3 className="text-center gradient-text">Profile</h3>
            <label htmlFor="profile">
                {/* <img
                    src={profile}
                    style={{ width: "60px", height: "60px", borderRadius: "100%", cursor: "pointer" }}
                /> */}
            </label>

            <div className="mt-3 d-flex align-items-center gap-2">
                <i className="fa-solid fa-wallet"></i>
                <span className="fw-bold">Ks {Number(user.balance).toLocaleString()}</span>
            </div>
            {/* <p>{user.name}</p> */}
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">*{error}</Alert>}
            <Form className="my-4" onSubmit={updateProfile} >
            {/* <input className="d-none" type="file" id="profile" onChange={handleImage} /> */}
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Name..."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="inputs"
                    />
                    {errors?.name && <span className="text-danger d-block">{errors?.name}</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        placeholder="Phone..."
                        value={phone ?? ""}
                        onChange={(e)=>setPhone(e.target.value)}
                        className="inputs"
                    />
                    {errors?.phone && <span className="text-danger d-block">{errors?.phone}</span>}
                </Form.Group>
                <div className="text-center">
                    <button style={{ background: 'linear-gradient(to right, #cc45c4,#7944bc,#4277b6)' }} type="submit" className="d-flex justify-content-center btn text-white w-100" >
                        {loader && 
                            <div className="me-2">
                                <Spinner />
                            </div>
                        }
                        <span className="d-block">ပြောင်းမည်</span>
                    </button>
                </div>
                <NavLink to={'/change-password'}>
                    <div className=" text-center mt-4">

                        <button className=" btn btn-outline-danger w-100 " type="submit" >
                            Change Password
                        </button>

                    </div>
                </NavLink>
            </Form>
        </div>
    );
};

export default Profile;