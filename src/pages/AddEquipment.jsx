import React from 'react';

const AddEquipment = () => {
    return (
        <div className="container mx-auto my-10 p-5">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Equipment</h2>
            <form className="bg-white shadow-lg p-6 rounded-lg max-w-xl mx-auto">
                {/* Image */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter image URL"
                    />
                </div>

                {/* Item Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="itemName">
                        Item Name
                    </label>
                    <input
                        type="text"
                        id="itemName"
                        name="itemName"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter item name"
                    />
                </div>

                {/* Category Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="categoryName">
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter category name"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full p-2 border rounded-lg"
                        rows="4"
                        placeholder="Enter description"
                    ></textarea>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter price"
                    />
                </div>

                {/* Rating */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter rating (1-5)"
                    />
                </div>

                {/* Customization */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="customization">
                        Customization
                    </label>
                    <input
                        type="text"
                        id="customization"
                        name="customization"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter customization options"
                    />
                </div>

                {/* Processing Time */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="processingTime">
                        Processing Time
                    </label>
                    <input
                        type="text"
                        id="processingTime"
                        name="processingTime"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter processing time"
                    />
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="stockStatus">
                        Stock Status
                    </label>
                    <input
                        type="number"
                        id="stockStatus"
                        name="stockStatus"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter stock quantity"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddEquipment;