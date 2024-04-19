import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.png';
import '../assets/css/navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { LuWallet2 } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import profile from '../assets/img/profile.png';
import wallet from '../assets/img/wallet.png';
import useFetch from "../hooks/useFetch";
import BASE_URL from '../hooks/baseURL';

export const navs = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Promotion', link: '/promotion' },
    { id: 3, title: 'History', link: '/history' },
    { id: 4, title: 'Game Log', link: '/gamelog' },
    // { id: 5, title: 'Profile', link: '/profile' },
];
const Navbar = () => {
    let auth = localStorage.getItem("token");
    let [url, setUrl] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        setUrl(auth ? `${BASE_URL}/user` : "");
    }, [auth]);

    const { data: user } = useFetch(url);
    // console.log(user);

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
    <div className='px-1 pt-1 pb-2 px-xl-3  mb-3 navbarContainer shadow-lg'>
        <div className=' m-0 p-0 d-flex navbar  align-items-center justify-content-between '>
            <NavLink to={'/'}>
                <img src={logo} className='logo' />
            </NavLink>
            <div className='m-0 p-0 d-flex  align-items-center justify-content-between gap-sm-4'>
                <div className='d-none d-lg-flex  align-items-center gap-4'>
                    {navs.map((item) => {
                        return <NavLink className={'text-light'} key={item.id} to={item.link}>{item.title}</NavLink>
                    })}
                </div>
                {auth && (
                    <>
                        <div className='d-none d-lg-flex  align-items-center gap-2 gap-sm-4 me-2'>
                            <NavLink to={'/profile'}  >
                                {/* <FaRegUserCircle className='navIcon' /> */}
                                <img src={profile} style={{ width: '25px', height: '25px' }} />
                                <small className='accInfo ms-2 fw-bold'>ID: {user.user_name}</small>
                            </NavLink>
                            <div>
                                {/* <LuWallet2 className='navIcon' /> */}
                                <img src={wallet} style={{ width: '25px', height: '25px' }} />
                                <small className='accInfo ms-2 fw-bold'>:Ks {Number(user.balance).toLocaleString()}</small>
                            </div>
                            
                            <div>
                                <IoMdLogOut className='navIcon' onClick={logout}  />
                            </div>
                        </div>
                    </>
                )}

                {!auth && (
                    <NavLink to={'/login'}>
                        <button className='me-2 loginBtn py-1 px-4 py-sm-2 px-sm-5 fw-bold'>LOGIN</button>
                    </NavLink>
                )}
                {
                    auth && (
                        <div className='d-lg-none'>
                            <IoMdLogOut className='navIcon' onClick={logout} />
                        </div>
                    )
                }
            </div>
        </div>
        {auth && (
            <div className='d-lg-none d-block'>
                <hr className='my-1 py-1' />
                <div className='px-2 d-flex align-items-center justify-content-between'>
                    <NavLink to={'/profile'}>
                        {/* <FaRegUserCircle className='navIcon' /> */}
                        <img src={profile} style={{ width: '25px', height: '25px' }} />
                        <small className='accInfo ms-2 fw-bold'>ID: {user.user_name}</small>
                    </NavLink>
                    <div>
                        {/* <LuWallet2 className='navIcon' /> */}
                        <img src={wallet} style={{ width: '25px', height: '25px' }} />
                        <small className='accInfo ms-2 fw-bold'>:Ks {Number(user.balance).toLocaleString()}</small>
                    </div>
                </div>
            </div>
        )}

    </div>
    )
}

export default Navbar
