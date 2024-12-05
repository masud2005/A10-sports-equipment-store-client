import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSportsEquipment = () => {

    const loadedData = useLoaderData();
    const [sportsEquipments, setSportsEquipments] = useState(loadedData)
    console.log(sportsEquipments);

    return (
        <div className='container mx-auto my-10 p-2 md:p-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gradient-to-r from-indigo-300 to-teal-300'>
                        <tr className='text-base text-black'>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sportsEquipments.map((equipment, index) => <tr className="hover text-base" key={equipment._id} >
                                <th>{index + 1}</th>
                                <td>{equipment.itemName}</td>
                                <td>{equipment.categoryName}</td>
                                <td>{equipment.price}</td>
                                <td><Link to={`/sports-equipment/details/${equipment._id}`} className='bg-gradient-to-r from-teal-300 to-indigo-300  py-[6px] px-3 rounded-full cursor-pointer text-black'>View Details</Link></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSportsEquipment;