import React from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='relative flex justify-between items-centerS'>
            <div></div>
            <div className='absolute left-1/2 -translate-x-1/2 flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <img className='w-8 h-8' src={userImg} alt="" />
                <Link to='/auth/login' className='btn btn-primary font-semibold px-5'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;