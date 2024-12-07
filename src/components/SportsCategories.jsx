import React from 'react';

const SportsCategories = () => {
    const categories = [
        {
            name: "Football",
            image: "https://i.ibb.co.com/7STvn5Y/floating-hd-football-pi752ibmdkbpojzj.jpg",
        },
        {
            name: "Tennis",
            image: "https://i.ibb.co.com/yFX5vhk/padel-tennis-player-racket-hand-600nw-2335537937.webp",
        },
        {
            name: "Cricket",
            image: "https://i.ibb.co.com/Cnct09C/e4731dc815195962bc815c6eec440f07.jpg",
        },
        {
            name: "Basketball",
            image: "https://i.ibb.co.com/d6GvKgS/360-F-62391976-WKb-OA72-Pb-U28-IAf-Ujn6t-LAPz3e2-IVxdr.jpg",
        },
        {
            name: "Swimming",
            image: "https://i.ibb.co.com/jLYkJ9q/beautiful-luxury-hotel-swimming-pool-resort-74190-3842.jpg",
        },
        {
            name: "Cycling",
            image: "https://i.ibb.co.com/TkMSBMZ/95c816706cea9bbf9b32ee46074b65bd.jpg",
        },
    ];

    return (
        <div className="container mx-auto px-4 pt-16">
            {/* Section Header */}
            <div className="text-center mb-12 px-5">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Explore Our <span className="text-teal-600">Sports Categories</span>
                </h2>
                <p className="text-lg text-gray-600">
                    Browse through our range of categories to find the perfect gear for your favorite sport.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsCategories;
