
// import React, { useContext, useState } from 'react';
// import { IoMdClose, IoMdMenu } from 'react-icons/io';
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';

// const Navbar = () => {
//     const { name } = useContext(AuthContext);
//     // console.log(name);
//     const [open, setOpen] = useState(false);

//     return (
//         <nav className="bg-gray-200 sticky shadow-md">
//             <div className="container mx-auto flex justify-between items-center py-4 px-2">
//                 {/* Website Logo */}
//                 <h1 className="text-3xl font-bold text-purple-700">Sports Equipment</h1>

//                 {/* Desktop and Mobile Menu */}
//                 <div className={`flex flex-col lg:flex-row gap-3 lg:gap-6 items-center absolute lg:static bg-gray-100 lg:bg-transparent w-full lg:w-auto transition-all duration-500 ease-in-out ${open ? 'top-[70px] left-0' : '-top-[300px] left-0'} lg:top-auto lg:left-auto`} >
//                     <NavLink to="/" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Home</NavLink>
//                     <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>All Sports Equipment</NavLink>
//                     <NavLink to="/add-equipment" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Add Equipment</NavLink>
//                     <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>My Equipment List</NavLink>
//                     <NavLink to="/login" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Login</NavLink>
//                     <NavLink to="/register" className={({ isActive }) => isActive ? 'text-base font-semibold border-b-2 border-purple-600 text-purple-700' : 'text-base text-purple-600 hover:text-purple-800'}>Register</NavLink>
//                 </div>

//                 {/* Hamburger Menu Button for Mobile */}
//                 <div onClick={() => setOpen(!open)} className="lg:hidden bg-gray-300 p-2 rounded-md text-2xl cursor-pointer">
//                     {open ? <IoMdClose /> : <IoMdMenu />}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    // console.log(user);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out Successfully!',
                    text: 'You have been logged out. See you soon!',
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Failed',
                    text: `Something went wrong: ${error.code}. Please try again.`,
                });
            })
    }

    return (
        <nav className="">
            <div className="container mx-auto flex justify-between items-center  py-4 px-2">
                {/* Left Section: Logo */}
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 text-transparent bg-clip-text">Sports Equipment</h1>
                </div>

                {/* Center Section: Navigation Links */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'text-base hover:text-indigo-600'}>Home</NavLink>
                    <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? 'text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'text-base hover:text-indigo-600'}>All Sports Equipment</NavLink>
                    <NavLink to="/add-equipment" className={({ isActive }) => isActive ? 'text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'text-base hover:text-indigo-600'}>Add Equipment</NavLink>
                    <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? 'text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'text-base hover:text-indigo-600'}>My Equipment List</NavLink>
                </div>

                {/* Right Section: Login/Register Buttons */}
                <div className="hidden lg:flex gap-4">
                    {
                        user ? <div className="flex items-center gap-3">
                            <div className="relative group">
                                <img className="rounded-full w-14 h-14 border-2 border-indigo-600 shadow-md transition-transform transform hover:scale-110" src={user?.photoURL || 'https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png'} alt="" />
                                <div className="absolute left-0 top-full mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap overflow-hidden">
                                    {user.displayName || 'Anonymous User'}
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn border-purple-600 hover:bg-indigo-500 text-gray-800 rounded-xl transition-all duration-300">Log Out</button>
                        </div> :
                            <div className='flex gap-8 items-center'>
                                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'text-base hover:text-indigo-600'}>Login</NavLink>
                                <NavLink to="/register" className={({ isActive }) => isActive ? 'text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'text-base hover:text-indigo-600'}>Register</NavLink>
                            </div>
                    }
                </div>

                {/* Hamburger Menu for Mobile */}
                <div onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden bg-gray-300 p-2 rounded-md text-2xl cursor-pointer">
                    {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${menuOpen ? 'left-0' : '-left-[100%]'} absolute duration-500 w-full bg-gray-50/95`}>
                <div className={`flex-col lg:hidden gap-4 py-4 px-4`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>All Sports Equipment</NavLink>
                    <NavLink to="/add-equipment" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Add Equipment</NavLink>
                    <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>My Equipment List</NavLink>
                    <div className='flex gap-10 justify-around pt-5 mt-4 border-t-2'>
                        {
                            user ? <div className="flex items-center gap-3">
                                <div className="relative group">
                                    <img className="rounded-full w-14 h-14 border-2 border-indigo-600 shadow-md transition-transform transform hover:scale-110" src={user?.photoURL || 'https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png'} alt="" />
                                    <div className="absolute left-0 top-full mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap overflow-hidden">
                                        {user.displayName || 'Anonymous User'}
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="btn border-purple-600 hover:bg-indigo-500 text-gray-800 rounded-xl transition-all duration-300">Log Out</button>
                            </div> :
                                <div className='flex gap-10'>
                                    <NavLink to="/login" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Login</NavLink>
                                    <NavLink to="/register" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Register</NavLink>
                                </div>
                        }
                    </div>
                </div>
                {/* {menuOpen && (
                    <div className={`flex-col lg:hidden gap-4 py-4 px-4`}>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>All Sports Equipment</NavLink>
                        <NavLink to="/add-equipment" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Add Equipment</NavLink>
                        <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>My Equipment List</NavLink>
                        <div className='flex gap-10 justify-around pt-5 mt-4 border-t-2'>
                            {
                                user ? <div className="flex items-center gap-3">
                                    <div className="relative group">
                                        <img className="rounded-full w-14 h-14 border-2 border-indigo-600 shadow-md transition-transform transform hover:scale-110" src={user?.photoURL || 'https://img.icons8.com/?size=48&id=z-JBA_KtSkxG&format=png'} alt="" />
                                        <div className="absolute left-0 top-full mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap overflow-hidden">
                                            {user.displayName || 'Anonymous User'}
                                        </div>
                                    </div>
                                    <button onClick={handleLogOut} className="btn border-purple-600 hover:bg-indigo-500 text-gray-800 rounded-xl transition-all duration-300">Log Out</button>
                                </div> :
                                    <div className='flex gap-10'>
                                        <NavLink to="/login" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Login</NavLink>
                                        <NavLink to="/register" className={({ isActive }) => isActive ? 'block text-lg font-semibold border-b-2 border-indigo-600 text-teal-600' : 'block text-base hover:text-teal-600'} onClick={() => setMenuOpen(false)}>Register</NavLink>
                                    </div>
                            }
                        </div>
                    </div>
                )} */}
            </div>
        </nav>
    );
};

export default Navbar;
