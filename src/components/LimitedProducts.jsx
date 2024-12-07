import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LimitedProducts = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/equipments/limited')
            .then(res => res.json())
            .then(data => {
                setEquipments(data);
            })
    }, [])

    return (
        <div className="container mx-auto px-2 md:px-4 ">
            <div className="text-center mb-12 ">
                <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">Explore Our <span className="text-gray-800">Premium Sports Equipment Collection</span></h2>
                <p className="text-lg text-gray-600">
                    Find top-quality gear for football, tennis, cricket, and more. Shop now to enhance your game!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipments.map(equipment => (
                    <div
                        key={equipment._id}
                        className="relative bg-gradient-to-br from-teal-50 to-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative h-48">
                            <img
                                src={equipment.image}
                                alt={equipment.itemName}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <span className="absolute top-2 left-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white px-3 py-1 rounded-lg shadow-md font-medium ">
                                {equipment.categoryName}
                            </span>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-3 xl:p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 text-transparent bg-clip-text mb-2">{equipment.itemName}</h2>
                                <p className=" text-gray-500 mb-4">
                                    {equipment.description.split(' ').slice(0, 20).join(' ')}...
                                </p>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-lg font-semibold text-teal-700">${equipment.price}</p>
                                    <p className=" font-medium text-gray-500">⭐ {equipment.rating}</p>
                                </div>
                                <p className=" text-gray-600 mb-4">
                                    <span className="font-semibold">Stock:</span> {equipment.stockStatus} available
                                </p>
                                <p className=" text-gray-600 mb-4">
                                    <span className="font-semibold">Customization:</span> {equipment.customization}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex items-center justify-center gap-4 bg-gray-50 py-3 border-t">
                            <Link to={`/sports-equipment/details/${equipment._id}`} className="flex items-center gap-2 px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all" > View Details </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LimitedProducts;