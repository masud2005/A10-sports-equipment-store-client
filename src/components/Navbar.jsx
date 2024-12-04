
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-200 sticky shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-2">
                {/* Website Logo */}
                <h1 className="text-3xl font-bold text-purple-700">Sports Equipment</h1>

                {/* Desktop and Mobile Menu */}
                <div className={`flex flex-col lg:flex-row gap-3 lg:gap-6 items-center absolute lg:static bg-gray-100 lg:bg-transparent w-full lg:w-auto transition-all duration-500 ease-in-out ${open ? 'top-[70px] left-0' : '-top-[300px] left-0'} lg:top-auto lg:left-auto`} >
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Home</NavLink>
                    <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>All Sports Equipment</NavLink>
                    <NavLink to="/add-equipment" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Add Equipment</NavLink>
                    <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>My Equipment List</NavLink>
                    <NavLink to="/login" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Login</NavLink>
                    <NavLink to="/register" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Register</NavLink>
                </div>

                {/* Hamburger Menu Button for Mobile */}
                <div onClick={() => setOpen(!open)} className="lg:hidden bg-gray-300 p-2 rounded-md text-2xl cursor-pointer">
                    {open ? <IoMdClose /> : <IoMdMenu />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
