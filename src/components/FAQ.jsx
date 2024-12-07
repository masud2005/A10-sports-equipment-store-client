import React, { useState } from "react";

const FAQ = () => {
    // Set the first question (index 0) as active by default
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "What types of sports equipment do you offer?",
            answer:
                "We offer a wide range of sports equipment including footballs, tennis rackets, cricket gear, basketballs, and more.",
        },
        {
            question: "Do you provide international shipping?",
            answer:
                "Yes, we provide international shipping to select countries. Please check our shipping policy for details.",
        },
        {
            question: "Can I return or exchange a product?",
            answer:
                "Yes, you can return or exchange a product within 30 days of purchase. Terms and conditions apply.",
        },
        {
            question: "How do I track my order?",
            answer:
                "Once your order is shipped, you will receive a tracking number via email to track your package.",
        },
        {
            question: "Are there any discounts for bulk purchases?",
            answer:
                "Yes, we offer discounts for bulk purchases. Contact our support team for more information.",
        },
    ];

    const toggleFAQ = (index) => {
        // Toggle the active state; if clicked, close; otherwise open
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto my-16 px-2">
            {/* Section Header */}
            <div className="text-center mb-12 px-5">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    <span className="text-teal-500">Frequently</span> <span className="text-indigo-500">Asked Questions</span>
                </h2>
                <p className="text-lg text-gray-600">
                    Find answers to the most commonly asked questions about our services and products.
                    Need more help? Feel free to contact us.
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border overflow-hidden transition-shadow duration-300 ${
                            activeIndex === index ? "shadow-lg bg-gradient-to-r from-indigo-500 to-teal-500 p-[1px]" : "border-gray-300"
                        }`}
                    >
                        <div
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center bg-gray-100 p-5 cursor-pointer"
                        >
                            <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                            <span
                                className={`text-2xl font-bold text-indigo-500 transform transition-transform ${
                                    activeIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                            >
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="bg-white px-5 py-4 text-gray-700">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
