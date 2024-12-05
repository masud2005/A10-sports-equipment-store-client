import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SportsEquipmentDetails = () => {
    const { id } = useParams();
    const [singleEquipment, setSingleEquipment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/equipments/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleEquipment(data);
            })
            .catch(error => console.error('Error fetching equipment:', error));
    }, [id]);

    const {
        image,
        itemName,
        categoryName,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        userEmail,
        userName,
        description,
    } = singleEquipment;

    return (
        <div className="flex justify-center items-center py-12 px-4">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
                {/* Left Image Section */}
                <div className="md:w-1/2 w-full h-96 md:h-auto">
                    <img
                        src={image || "https://via.placeholder.com/600x400"}
                        alt={itemName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Content Section */}
                <div className="p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{itemName}</h1>
                        <p className="text-sm text-gray-500 mb-4">
                            Category: <span className="font-semibold text-indigo-600">{categoryName}</span>
                        </p>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-lg font-semibold text-gray-700">
                                    Price: <span className="text-indigo-600">${price}</span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Rating: <span className="text-yellow-500">{rating} ⭐</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    Stock Status: <span className="font-semibold text-green-600">{stockStatus}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Customization: <span className="font-semibold">{customization}</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Processing Time: <span className="font-semibold">{processingTime} days</span>
                        </p>
                    </div>

                    {/* User Info */}
                    <div className="mt-6 border-t pt-4">
                        <p className="text-sm text-gray-600">
                            Added by: <span className="font-semibold">{userName}</span>
                        </p>
                        <p className="text-sm text-gray-600">Email: {userEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsEquipmentDetails;
