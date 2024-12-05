import React from 'react';

const AddEquipment = () => {

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
        
        const newEquipment = { image, itemName, categoryName, price, rating, customization, processingTime, stockStatus, userEmail, userName, description };

        fetch('http://localhost:5000/equipments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="container mx-auto my-10 p-5">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Equipment</h2>
            <form onSubmit={handleAddNewEquipment} className="bg-white shadow-lg p-6 rounded-lg max-w-4xl mx-auto">
                {/* Grid Layout for Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">Image URL</label>
                        <input type="text" id="image" name="image" className="w-full p-2 border rounded-lg" placeholder="Enter image URL" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="itemName">Item Name</label>
                        <input type="text" id="itemName" name="itemName" className="w-full p-2 border rounded-lg" placeholder="Enter item name" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="categoryName">Category Name</label>
                        <input type="text" id="categoryName" name="categoryName" className="w-full p-2 border rounded-lg" placeholder="Enter category name" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" className="w-full p-2 border rounded-lg" placeholder="Enter price" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">Rating</label>
                        <input type="number" id="rating" name="rating" className="w-full p-2 border rounded-lg" placeholder="Enter rating (1-5)" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="customization">Customization</label>
                        <input type="text" id="customization" name="customization" className="w-full p-2 border rounded-lg" placeholder="Enter customization options" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="processingTime">Processing Time</label>
                        <input type="text" id="processingTime" name="processingTime" className="w-full p-2 border rounded-lg" placeholder="Enter processing time" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="stockStatus">Stock Status</label>
                        <input type="number" id="stockStatus" name="stockStatus" className="w-full p-2 border rounded-lg" placeholder="Enter stock quantity" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="userEmail">User Email</label>
                        <input type="email" id="userEmail" name="userEmail" className="w-full p-2 border rounded-lg bg-gray-100" placeholder="User Email" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="userName">User Name</label>
                        <input type="text" id="userName" name="userName" className="w-full p-2 border rounded-lg bg-gray-100" placeholder="User Name" readOnly />
                    </div>
                </div>

                {/* Description Field */}
                <div className="mt-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="w-full p-2 border rounded-lg" rows="4" placeholder="Enter description"></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="mt-6 w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700">Submit</button>
            </form>
        </div>
    );
};

export default AddEquipment;
