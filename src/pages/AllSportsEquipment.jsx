import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const AllSportsEquipment = () => {
    const loadedData = useLoaderData();
    const [sportsEquipments, setSportsEquipments] = useState(loadedData);

    // Sort Function
    const handleSort = (order) => {
        const sortedEquipments = [...sportsEquipments].sort((a, b) => {
            if (order === 'asc') {
                return a.price - b.price;
            } else if (order === 'desc') {
                return b.price - a.price;
            }
            return 0;
        });
        setSportsEquipments(sortedEquipments);
    };

    return (
        <div className="container mx-auto my-10 p-2 md:p-5">
            <Helmet>
                <title>All Equipment | EquiSports</title>
            </Helmet>
            {/* Page Heading */}
            <h1 className="text-3xl font-extrabold text-center text-indigo-500 mb-12 -mt-7">
                All Sports <span className="text-teal-500">Equipment</span>
            </h1>

            {/* Sort Buttons */}
            <div className="flex justify-end gap-4 mb-6">
                <button onClick={() => handleSort('asc')} className="bg-teal-500 hover:bg-teal-600 text-white py-2 text-sm md:text-base px-2 md:px-4 rounded"> Sort by Price (Low to High) </button>
                <button onClick={() => handleSort('desc')} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 text-sm md:text-base px-2 md:px-4 rounded" >Sort by Price (High to Low)</button>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {sportsEquipments.map(equipment => (
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
                        <div className="flex-1 p-3 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 text-transparent bg-clip-text mb-2">{equipment.itemName}</h2>
                                <p className=" text-gray-500 mb-1">
                                    {equipment.description.split(' ').slice(0, 10).join(' ')}...
                                </p>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-lg font-semibold text-teal-700">${equipment.price}</p>
                                    <p className=" font-medium text-gray-500">⭐ {equipment.rating}</p>
                                </div>
                                <p className=" text-gray-600 mb-1">
                                    <span className="font-semibold">Stock:</span> {equipment.stockStatus} available
                                </p>
                                {/* <p className=" text-gray-600 mb-1">
                                                <span className="font-semibold">Customization:</span> {equipment.customization}
                                            </p> */}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex items-center justify-center gap-4 bg-gray-50 py-3 border-t">
                            <Link to={`/sports-equipment/details/${equipment._id}`} className="flex items-center gap-2 px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all" > View Details </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Equipment Table */}
            {/* <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    <thead className="bg-gradient-to-r from-indigo-300 to-teal-300">
                        <tr className="text-base text-black">
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sportsEquipments.map((equipment, index) => (
                            <tr className="text-base" key={equipment._id}>
                                <th>{index + 1}</th>
                                <td>{equipment.itemName}</td>
                                <td>{equipment.categoryName}</td>
                                <td>${equipment.price}</td>
                                <td>
                                    <Link to={`/sports-equipment/details/${equipment._id}`} className="bg-gradient-to-r from-teal-300 to-indigo-300 hover:from-teal-400 hover:to-indigo-400 py-[6px] px-3 rounded-full cursor-pointer text-black whitespace-nowrap">View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default AllSportsEquipment;
