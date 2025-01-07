import React from 'react';

const AboutUs = () => {
    return (
        <section class="container mx-auto my-12 px-6">
            <h1 className="text-3xl font-extrabold text-center text-teal-500 mb-10 -mt-5">
                About <span className="text-indigo-500">Us</span>
            </h1>
            <div class="bg-gradient-to-br from-teal-50 to-indigo-100 rounded p-8 ">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    Welcome to EquiSports, your one-stop destination for all sports equipment and apparel needs. Established in 2022, EquiSports has been at the forefront of delivering top-notch sporting goods to athletes and sports enthusiasts alike. Our mission is to provide a diverse range of high-quality products that cater to the needs of professionals and beginners.
                </p>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    At EquiSports, our mission is to inspire and empower athletes of all levels by providing the best sports equipment and apparel. We believe that every athlete deserves access to the best gear to help them achieve their goals and perform at their best.
                </p>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    We offer a comprehensive selection of sports equipment and apparel, including:
                </p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Sports gear for various sports like football, basketball, cricket, and more.</li>
                    <li>High-quality sportswear for men, women, and children.</li>
                    <li>Accessories such as water bottles, gloves, and protective gear.</li>
                </ul>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    EquiSports stands out in the industry due to our commitment to quality, customer satisfaction, and innovation. Here are a few reasons why you should choose us:
                </p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Wide range of products to cater to all your sports needs.</li>
                    <li>Competitive pricing with regular discounts and offers.</li>
                    <li>Dedicated customer support to assist you with your queries.</li>
                    <li>Secure and easy online shopping experience.</li>
                </ul>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p class="text-gray-700 leading-relaxed">
                    If you have any questions, feel free to reach out to us at <a href="mailto:support@equisports.com" class="text-teal-600">support@equisports.com</a>. We're here to help you with all your sports equipment needs!
                </p>
            </div>
        </section>
    );
};

export default AboutUs;