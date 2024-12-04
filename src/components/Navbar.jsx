import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='grid grid-cols-12 mx-auto container items-center'>
            <div className='col-span-2'>
                <h1 className='text-3xl font-semibold'>Sports Equipment</h1>
            </div>
            <div className='col-span-8 flex justify-center gap-10'>
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"} >Home</NavLink>
                <NavLink to={'/all-sports-equipment'} className={({ isActive }) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>All Sports Equipment</NavLink>
                <NavLink to={'/add-equipment'} className={({ isActive }) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>Add Equipment</NavLink>
                <NavLink to={'/my-equipment-list'} className={({ isActive }) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>My Equipment List</NavLink>
            </div>
            <div className='col-span-2 flex justify-end gap-10'>
                <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>Login</NavLink>
                <NavLink to={'/register'} className={({ isActive }) => isActive ? 'text-base font-medium border border-purple-600 !text-black' : "hover:text-indigo-400 transition-colors duration-300 text-base text-purple-600"}>Register</NavLink>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;