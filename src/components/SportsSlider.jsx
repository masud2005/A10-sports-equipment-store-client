import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SportsSlider = () => {
    return (
        <div className="container px-2 mx-auto my-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-2 lg:gap-6 items-center">
                {/* Info Section */}
                <div className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-teal-500 p-[2px] rounded-lg h-full">
                    <div className="bg-gray-100 p-5 lg:p-4 xl:p-8 rounded-lg h-full">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 inline-block text-transparent bg-clip-text mb-4">
                            Welcome to EquiSports!
                        </h1>
                        <p className="text-gray-700 mb-4">
                            Your one-stop shop for premium sports equipment. Discover top-quality gear for every sport, from football to tennis, and elevate your game today.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="bg-green-600 text-white p-3 rounded-full">⚽</span>
                                <p className="text-gray-800">Wide Range of Sports Gear</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-green-600 text-white p-3 rounded-full">🛒</span>
                                <p className="text-gray-800">Easy & Secure Shopping</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-green-600 text-white p-3 rounded-full">⭐</span>
                                <p className="text-gray-800">Customer Reviews & Ratings</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="md:col-span-3">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="relative h-[450px] flex items-center justify-center">
                                <img
                                    src="https://i.ibb.co.com/56RdzyG/sports-gear-ready-stockcake.jpg"
                                    alt="Top Deals"
                                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                                />
                                <div className="relative text-center text-white">
                                    <h2 className="text-4xl font-extrabold mb-3">
                                        Top Deals on Sports Gear
                                    </h2>
                                    <p className="text-lg">
                                        Save big on your favorite equipment. Limited-time offers!
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="relative h-[450px] flex items-center justify-center">
                                <img
                                    src="https://i.ibb.co.com/Jk1C1yd/images-3.jpg"
                                    alt="New Arrivals"
                                    className="absolute inset-0 w-full h-full object-center brightness-50"
                                />
                                <div className="relative text-center text-white">
                                    <h2 className="text-4xl font-extrabold mb-3">
                                        New Arrivals Just In!
                                    </h2>
                                    <p className="text-lg">
                                        Explore the latest in sports equipment and accessories.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="relative h-[450px] flex items-center justify-center">
                                <img
                                    src="https://i.ibb.co.com/kq8WGNF/360-F-886055846-b-F4-Hibyd277-Hxv1-ZKgf-UYRTLO8d-ZANx7.jpg"
                                    alt="Customer Favorites"
                                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                                />
                                <div className="relative text-center text-white">
                                    <h2 className="text-4xl font-extrabold mb-3">
                                        Customer Favorites
                                    </h2>
                                    <p className="text-lg">
                                        See what other sports enthusiasts love to buy.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SportsSlider;
