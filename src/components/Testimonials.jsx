const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            review: "Amazing quality and great customer service. Highly recommend this store!",
            rating: 5,
            image: "https://i.ibb.co/VvGfWhM/images-4.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "Wide range of sports equipment with great pricing. Will buy again!",
            rating: 4,
            image: "https://i.ibb.co/VjPWcvz/images-5.jpg",
        },
        {
            id: 3,
            name: "Michael Lee",
            review: "Quick delivery and well-packaged products. Satisfied with my purchase.",
            rating: 5,
            image: "https://i.ibb.co/1L6m2g4/images-6.jpg",
        },
    ];

    return (
        <div className="container mx-auto my-16 px-2">
            {/* Section Header */}
            <div className="text-center mb-12 px-5">
                <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">What Our <span className="text-gray-800">Customers Say</span></h2>
                <p className="text-lg text-gray-600">
                    Hear from our satisfied customers who love our products and services. 
                    Their feedback inspires us to keep delivering excellence.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="p-6 border rounded-lg shadow-md bg-white text-center transform transition duration-300 hover:shadow-xl hover:scale-105"
                    >
                        {/* Profile Image */}
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-24 h-24 mx-auto rounded-full border-2 border-indigo-500 mb-4"
                        />

                        {/* Name and Rating */}
                        <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-yellow-500 text-lg my-2">
                            {"⭐".repeat(review.rating)}
                        </p>

                        {/* Review Text */}
                        <p className="text-gray-600 italic">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
