import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddEquipment = () => {

    const { user } = useContext(AuthContext);
    // console.log(user?.displayName);

    const handleAddNewEquipment = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const description = form.description.value;
        // console.log(image, itemName, categoryName, price, rating, customization, processingTime, stockStatus, userEmail, userName, description);
        const newEquipment = { image, itemName, categoryName, price, rating, customization, processingTime, stockStatus, userEmail, userName, description };

        fetch('https://sports-equipment-store-server-alpha.vercel.app/equipments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'New Equipment Added!',
                        text: 'Your equipment has been successfully added to the Database.'
                    })
                }
                form.reset();
            })
            .catch(error => {
                // console.error('Error adding equipment:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Add Equipment',
                    text: 'Something went wrong while adding the equipment. Please try again later.'
                });
            });
    }

    return (
        <div className="container mx-auto my-10 p-2 md:p-5">
            <Helmet>
                <title>Add Equipment | EquiSports</title>
            </Helmet>
            <div className='text-center'>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-teal-500 text-transparent bg-clip-text inline-block -mt-10">Add New Equipment</h2>
            </div>
            <div className='bg-gradient-to-tl from-indigo-400 via-purple-500 to-teal-500 rounded-lg p-[1px]'>
                <form onSubmit={handleAddNewEquipment} className="bg-gradient-to-tr from-indigo-50 via-purple-50 to-teal-50 shadow-lg p-3 lg:p-6 rounded-lg">
                    {/* Grid Layout for Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="image">Image URL</label>
                            <input type="text" id="image" name="image" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter image URL" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="itemName">Item Name</label>
                            <input type="text" id="itemName" name="itemName" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter item name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="categoryName">Category Name</label>
                            <input type="text" id="categoryName" name="categoryName" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter category name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="price">Price</label>
                            <input type="number" id="price" name="price" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter price" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="rating">Rating</label>
                            <input type="number" id="rating" name="rating" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter rating (1-5)" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="customization">Customization</label>
                            <input type="text" id="customization" name="customization" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter customization options" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="processingTime">Processing Time</label>
                            <input type="text" id="processingTime" name="processingTime" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter processing time" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="stockStatus">Stock Status</label>
                            <input type="number" id="stockStatus" name="stockStatus" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" placeholder="Enter stock quantity" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="userEmail">User Email</label>
                            <input type="email" id="userEmail" name="userEmail" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none bg-gray-100" placeholder="User Email" readOnly defaultValue={user?.email} />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="userName">User Name</label>
                            <input type="text" id="userName" name="userName" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none bg-gray-100" placeholder="User Name" readOnly defaultValue={user?.displayName} />
                        </div>
                    </div>

                    {/* Description Field */}
                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="description">Item Description</label>
                        <textarea id="description" name="description" className="w-full p-2 md:p-3 border rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none" rows="4" placeholder="Enter description" required ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="mt-6 w-full bg-gradient-to-tr from-indigo-300 to-teal-300 p-3 rounded-lg font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;
