import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-300 to-indigo-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <h4 className="text-3xl font-bold text-gray-800 mb-4">Follow Us</h4>
                    <ul className="flex space-x-4 text-gray-700">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100065806763087" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
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