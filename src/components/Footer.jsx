import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-200 to-indigo-200 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-2">
                {/* Column 1 */}
                <div className='text-gray-700'>
                    <h4 className="text-3xl font-bold text-gray-800 mb-4">EquiSports</h4>
                    <p>
                        Your one-stop solution for all sports equipment. From gear to apparel,
                        we have everything to elevate your sports experience.
                    </p>
                </div>
                {/* Column 2 */}
                <div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h4>
                    <ul className='text-gray-700'>
                        <li>Email: support@equisports.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 123 Sports Street, City, Country</li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-4">Quick Links</h4>
                    <ul className='text-gray-700 '>
                        <li><NavLink to="/" className="hover:text-gray-900">Home</NavLink></li>
                        <li><NavLink to="/all-sports-equipment" className="hover:text-gray-900">All Sports Equipment</NavLink></li>
                        <li><NavLink to="/add-equipment" className="hover:text-gray-900">Add Equipment</NavLink></li>
                        <li><NavLink to="/my-equipment-list" className="hover:text-gray-900">My Equipment List</NavLink></li>
                    </ul>
                </div>
                {/* Column 4 */}
                <div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-4">Follow Us</h4>
                    <ul className="flex space-x-4 text-gray-700">
                        <li>
                            <a href="https://www.facebook.com/MasudRana2005" target="_blank" rel="noreferrer">
                                <FaFacebook size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/masud-rana-955788318/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/masud2005" target="_blank" rel="noreferrer">
                                <FaGithub size={32} />
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="text-center mt-8 border-t border-gray-400 pt-4">
                <span className='text-gray-700'>© {new Date().getFullYear()} EquiSports. Design by. </span>
                <span className='text-gray-900 font-semibold font-serif'>Masud Rana</span>
            </div>
        </footer>
    );
};

export default Footer;
