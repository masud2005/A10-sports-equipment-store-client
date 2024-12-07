import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const [userEquipments, setUserEquipments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/equipments/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserEquipments(data);
            });
    }, [user]);

    const handleDeleteEquipment = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you won't be able to revert this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#14B8A6",
            cancelButtonColor: "#EF4444",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/equipments/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("delete is one", data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The equipment has been successfully deleted.",
                                icon: "success",
                                confirmButtonColor: "#14B8A6"
                            });
                            const remainingUsers = userEquipments.filter(equipment => equipment._id !== id);
                            setUserEquipments(remainingUsers);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting user:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong, the equipment could not be deleted.",
                            icon: "error",
                            confirmButtonColor: "#EF4444",
                        });
                    });
            }
        });
    }


    return (
        <div className="container mx-auto px-2 md:px-4 py-8">
            <h1 className="text-3xl font-extrabold text-center text-indigo-500 mb-12">
                My <span className="text-teal-500">Equipment List</span>
            </h1>
            {
                userEquipments.length === 0 && <div>
                    <h1 className='text-center text-3xl font-semibold text-red-400'>You haven't added anything yet. Add some Equipment!</h1>
                </div>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {userEquipments.map(equipment => (
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
                            <Link to={`/update-equipment/${equipment._id}`} className="flex items-center gap-2 px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all" > Update </Link>
                            <button onClick={() => handleDeleteEquipment(equipment._id)} className="flex items-center gap-2 px-4 py-2 text-white bg-red-400 rounded-lg hover:bg-red-500 transition-all">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEquipmentList;
