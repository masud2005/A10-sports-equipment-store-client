import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SportsEquipmentDetails = () => {    
    const singleEquipment = useLoaderData();

    const { image, itemName, categoryName, price, rating, customization, processingTime, stockStatus, userEmail, userName, description } = singleEquipment;

    return (
        <div className="py-12 px-2 container mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border w-full ">
                {/* Left Image Section */}
                <div className="h-[250px] md:h-[400px] lg:h-[500px] w-full">
                    <img
                        src={image || "https://via.placeholder.com/600x400"}
                        alt={itemName}
                        className="w-full h-full brightness-75"
                    />
                </div>

                {/* Right Content Section */}
                <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl p-1 font-bold bg-gradient-to-r from-indigo-500 to-teal-500 text-transparent bg-clip-text inline-block mb-2">{itemName}</h1>
                        <p className="text-gray-500 mb-4">
                            Category: <span className="font-semibold text-indigo-600">{categoryName}</span>
                        </p>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-lg font-semibold text-gray-700">
                                    Price: <span className="text-indigo-600">${price}</span>
                                </p>
                                <p className="text-gray-500">
                                    Rating: <span className="text-yellow-500">{rating} ⭐</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600">
                                    Stock Status: <span className="font-semibold text-green-600">{stockStatus}</span>
                                </p>
                                <p className="text-gray-600">
                                    Customization: <span className="font-semibold">{customization}</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            Processing Time: <span className="font-semibold">{processingTime} days</span>
                        </p>
                    </div>

                    {/* User Info */}
                    <div className="mt-6 border-t pt-4">
                        <p className="text-gray-600">
                            Added by: <span className="font-semibold">{userName}</span>
                        </p>
                        <p className="text-gray-600">Email: {userEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsEquipmentDetails;
