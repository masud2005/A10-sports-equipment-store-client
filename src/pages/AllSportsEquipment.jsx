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

            {/* Equipment Table */}
            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* Table Head */}
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
            </div>
        </div>
    );
};

export default AllSportsEquipment;
