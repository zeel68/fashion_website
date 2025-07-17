import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Breadcrum from '../Breadcrum/Breadcrum';

const Status = () => {
    const [recent, setRecent] = useState(null);

    const toggleMenuRecent = (index) => {
        setRecent(recent === index ? null : index);
    };

    const Recent = [
        {
            question: 'How will I know if my order has been placed successfully?',
            type: 'text',
            answer:
                'You will receive an email and SMS confirmation from Indya once your order has been successfully placed. The mail will have all the details related to your order.'
        },
        {
            question: 'How do I check the status of my order?',
            type: 'text',
            answer:
                'To check the status of your order, log into your account on the Indya app or website, and go to the My Orders section to get all the information.'
        },
        {
            question: 'Can I modify the shipping address of my order after it has been placed?',
            type: 'list',
            answer: [
                "The shipping address of your order can only be modified if your order hasn’t been packed yet at our warehouse.",
                "To modify your shipping address, please get in touch with our Customer Care team at customercare@houseofindya.com or +91-8929987349 / 0120-6850262."
            ]
        },
        {
            question: 'How can I track my order?',
            type: 'list',
            answer: [
                "Orders, once processed and shipped can be tracked using the consignment/tracking number, commonly referred to as the AWB number. You can track your order in two ways -",
                "After you log in to your Indya account, go to the ‘My Account’ page and find the order number your wish to track. Click on ‘Track my order’ to see real-time updates of your shipment status.Please note that this link becomes valid only 24 hours after your order has been dispatched.",
                "Alternatively, you may track your order through our order shipment email which provides a direct link to track your order real-time on the service provider’s website",
                "In cases where our website can’t link to the courier service providers’ website in real-time, we will share the AWB number and the provider’s name with you via email, and on your account page. To track your shipment status, all you need to do is –",
                "a. Go to the service provider's website",
                "b. Type in the tracking number provided in the mail in the Tracking section and check the status",
            ]
        },
        {
            question: 'How long will it take for my order to reach me?',
            type: 'list',
            answer: [
                'The average delivery time is 12–20 business days, depending on your location.',
                'Jewellery items are delivered within 7–15 business days due to the intricate craftsmanship involved.',
                'Made-to-Order styles may take longer — up to 45 business days — owing to the detailed workmanship and customization required.',
                'Please refer to the shipping dates mentioned below each product for more clarity.',
            ]
        },
        {
            question: 'How soon will the status of my order be updated to Delivered in my Dhaneri account?',
            type: 'text',
            answer:
                'You will receive an email and SMS confirmation from Indya once your order has been successfully placed. The mail will have all the details related to your order.',
        },
        {
            question: 'My order shows delivered but I have not received it.',
            type: 'list',
            answer: [
                'Generally our courier partners deliver the order to the intended recipient at the delivery address only. In case, you have not received the order, we request you to call us on +91-8929987349 / 0120-6850262 or mail us at customercare@houseofindya.com within 48 hours of the delivery intimation from our end. We shall arrange proof of delivery for you within 48 hours of your complaint from the aligned courier partner.',
                'Kindly note, any complaint raised after 48 hours of receiving the delivery intimation may not be considered.',
            ]
        }
    ];

    return (
        <div className="main py-[30px]">
            <div className="max-w-screen-xxl mx-auto px-[15px] w-[80%]">
                <Breadcrum current="Order Status" />
                <div className="w-full">
                    <div className="block text-center">
                        <h1 className="text-[40px] font-['Inter'] font-bold">Order Status And Tracking</h1>
                    </div>

                    <div className="block pt-[40px]">
                        <p className="text-[28px] font-['Inter'] font-bold tracking-wider">Popular Questions</p>
                    </div>

                    <div className="block pt-[30px]">
                        {Recent.map((item, index) => (
                            <div key={index} className="block w-full border-b border-b-[#dcdcdc]">
                                <div
                                    className="flex flex-wrap justify-between items-center cursor-pointer pt-4 pb-4"
                                    onClick={() => toggleMenuRecent(index)}
                                >
                                    <p className="text-[22px] font-medium tracking-wider">{item.question}</p>
                                    {recent === index ? <FaMinus /> : <FaPlus />}
                                </div>

                                {recent === index && (
                                    <div className="block pb-4">
                                        {item.type === 'text' && (
                                            <p className="text-[18px] tracking-wider text-[#121212B2] font-medium">{item.answer}</p>
                                        )}

                                        {item.type === 'list' && (
                                            <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#121212B2] font-medium">
                                                {item.answer.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Status;
