import React, { useState } from 'react'
import Breadcrum from '../Breadcrum/Breadcrum'
import { FaArrowRightLong, FaMinus, FaPlus } from 'react-icons/fa6'

const Return = () => {
    const [menuOpen, setMenuOpen] = useState(null);
    const toggleMenu = (index) => {
        setMenuOpen(menuOpen === index ? null : index);
    };

    const FaqList = [
        {
            question: 'What is Dhaneri’s 7 days return & exchange policy? How does it work?',
            type: 'list',
            sections: [
                {
                    description: "Dhaneri's 7 days returns and exchange policy gives you an option to return or exchange items purchased from the Indya website/m-site/app for any reason within 7 days of receipt of the item. Get store credits for your returned orders to use them for all your future purchases. We only ask that you don’t use the product and preserve its original condition, tags, and packaging. You are welcome to try on a product but please take adequate measures to preserve its condition. Kindly note, all exchanges are subject to stock availability. Please also note that we only offer size exchanges. If you wish to exchange your item for an alternate product, we suggest that you return it to obtain store credit and purchase the new item separately. The following EXCEPTIONS and RULES apply to our 7 days Return & Exchange Policy:",
                    list: [
                        "Dhaneri Jewelry and any customized items altered as per body measurements are not eligible for returns.",
                        "All items to be returned or exchanged must be unused and should be in their original condition with all tags and packaging intact (e.g. shoes must be packed in the original shoe box)",
                        "We only accept returns for products purchased directly from Dhaneri’s website, mobile site, or app. Any return request for products purchased from our indirect online and offline distributors will be declined by us",
                        "The exchange policy allows for only size exchanges.",
                        "If you self-ship your return/exchange, kindly pack the items securely to prevent any loss or damage during transit. For all self-shipped returns, we recommend you use a reliable courier service. A fixed amount of Rs. 100 will be reimbursed subject to the return having met our Returns and Exchange Policy",
                        "Please allow 24 hours post-delivery of your order for your order status to be updated in your Indya account.",
                        "Please check the items, type of return/exchange, and other related details carefully. Our courier partner will pick up only the items mentioned at the time of submitting the return/exchange request by you",
                        "In case the items handed over to the courier person don't match the details of the items mentioned in the return/exchange request, we will conduct an internal probe and get back to you accordingly",
                        "If you self-ship any product without officially informing us through our return/exchange process, we will not process the return"
                    ],
                },
            ]
        },
        {
            question: 'Which products are not eligible for return and exchange?',
            type: 'text',
            answer: 'You will receive an email and SMS confirmation from Indya once your order has been successfully placed. The mail will have all the details related to your order.',
        },
        {
            question: 'How do I return products purchased from Dhaneri?',
            type: 'list',
            sections: [{
                description: "You can return products purchased from Indya within 7 days of receiving the product. Please follow these steps -",
                list: [
                    "Click on 'Return’ under the “My Orders” section of the Indya App/Website/M-site and follow the instructions. Please make a note of the Return ID that is generated at the end of the process.",
                    "All refunds shall be processed in the form of store credits.",
                    "We offer a pick-up facility in select locations basis our courier serviceability. If you select to schedule a pick-up, please place the product(s) in a packet. The product(s) must be unused, unwashed and all the tags should be intact. We will pick up the return within 1 - 3 business days from the request placement date. Keep the packet ready to expedite the return pickup.",
                    "If the reverse pick-up option is not available at your location, you can self-ship the product(s) to us by any reliable courier service within 7 days of raising a return request. Please pack the product(s) and ensure that it is unused, unwashed and all the tags are intact. Please do mention the Order No. and Return ID on a piece of paper and place it in the packet. Kindly address the package to the following address -",
                    "High Street Essentials Pvt. Ltd.\nPlot No-39, Block-C, Sector-58\nNoida, Uttar Pradesh-201301\nDhaneri",
                  
                ],
            }]
        },

        {
            question: 'How do I place an exchange request on Dhaneri?',
            type: 'list',
            sections: [{
                description: "You can return products purchased from Indya within 7 days of receiving the product. Please follow these steps -",
                list: [
                    "Click on 'Return’ under the “My Orders” section of the Indya App/Website/M-site and follow the instructions. Please make a note of the Return ID that is generated at the end of the process.",
                    "All refunds shall be processed in the form of store credits.",
                    "We offer a pick-up facility in select locations basis our courier serviceability. If you select to schedule a pick-up, please place the product(s) in a packet. The product(s) must be unused, unwashed and all the tags should be intact. We will pick up the return within 1 - 3 business days from the request placement date. Keep the packet ready to expedite the return pickup.",
                    "If the reverse pick-up option is not available at your location, you can self-ship the product(s) to us by any reliable courier service within 7 days of raising a return request. Please pack the product(s) and ensure that it is unused, unwashed and all the tags are intact. Please do mention the Order No. and Return ID on a piece of paper and place it in the packet. Kindly address the package to the following address -",
                    "High Street Essentials Pvt. Ltd.\nPlot No-39, Block-C, Sector-58\nNoida, Uttar Pradesh-201301\nDhaneri",
                    "We request you to share the courier details with us on customercare@houseofindya.com or WhatsApp us on +91-8929987349 for us to initiate the Rs.100 store credits to your account, valid for all your future purchases with Indya. Any product self-shipped after 7 days of raising a return request will not be considered.We will send you a confirmation email as soon as we receive the shipment at our warehouse",
                    "Post pickup, we will initiate the exchange process in 24-48 hours.",
                    "Please note that if the exchange size is not available at our warehouse, we will contact you to convert your return into store credit or refund, as per your preference.",

                ],
            }]
        },
          {
            question: 'How can I self-ship the return/exchange product to Dhaneri?',
            type: 'text',
            answer: 'PIn case your area pin code is not serviceable for pickup, you will need to self-ship the item(s) to be returned via any reliable courier partner. Please ensure that you place a sheet of paper with details of the Order ID and Return/Exchange ID in the package. For all self-shipped returns, you will be reimbursed Rs. 100 via Indya Store Credits. We request you to share the courier details with us on customercare@houseofindya.com or WhatsApp us on +91-8929987349 for us to initiate the Rs.100 store credits to your account, valid for all your future purchases with Indya.',
        },
        {
            question: 'Where should I self-ship the products to be returned/exchanged?',
            type: 'text',
            answer: 'Please mention the Order No. and Return/Exchange ID on a piece of paper and place it in the packet. Kindly address the package to the following address -\nHigh Street Essentials Pvt. Ltd.\nPlot No-39, Block-C, Sector-58\nNoida, Uttar Pradesh-201301\nDhaneri,',
        },

        {
            question: 'By when can I self-ship the products that I wish to return/exchange?',
            type: 'text',
            answer: 'You can self-ship the products you wish to return/exchange by any reliable courier service within 7 days of raising a return/exchange request. Any product self-shipped after 7 days of raising a return/exchange request will not be considered.',
        },
        {
            question: 'How long will it take for me to receive the refund of my returned product?',
            type: 'list',
            sections: [{
                description: "You can return products purchased from Indya within 7 days of receiving the product. Please follow these steps -",
                list: [
                    "Once the product is picked up by our aligned courier partner, we will initiate the refund within 24 hours. The refund will be processed in the form of Indya store credits and the amount will reflect within 24 hours. A confirmation email will be sent to you on your registered mail id.",
                    "If you self-ship the return order, the product(s) will first go through a quality check at our end. Once it clears the check, the refund process will be initiated within 24-48 business hours in the form of Indya Store Credits, the amount will reflect in 24 business hours. In case the product does not meet our quality check, we will not be able to process the refund",
                ],
            }]
        },
        {
            question: 'I have received store credits how do I redeem them while placing an order?',
            type: 'text',
            answer: 'Please sign in with your registered email ID to view and utilize your store credits. On the checkout page, a store credit tab will reflect your store credits. Here, the total amount to be paid by you will be calculated after deducting the store credits.',
        },
        {
            question: 'How do I return/exchange multiple products from a single order?',
            type: 'list',
            sections: [{
                description: "You can return products purchased from Indya within 7 days of receiving the product. Please follow these steps -",
                list: [
                    "If you are returning/exchanging multiple products from a single order together, we will generate a single Return ID/Exchange ID for all products and you will receive an e-mail and SMS confirmation for the same",
                    "You can return as many items from a single order within the 7 days return policy. We will accept your return/exchange and arrange a reverse pick-up for the same.",
                ],
            }]
        },
    ];

    return (
        <>
            <div className='main py-[30px]'>
                <div className="max-w-screen-xxl mx-auto px-[15px] w-[80%]">
                    <Breadcrum current="Return And exchange" />

                    <div className="block text-center">
                        <h1 className="text-[40px] font-['Inter'] font-bold">Return And Exchange</h1>
                    </div>

                    {/* Return process images with arrows */}
                    <div className="w-[842px] mx-auto mt-[95px]">
                        <div className="flex justify-between align-middle mx-auto items-center">
                            <div className="max-w-[134px] h-[97px] flex flex-col justify-center items-center text-center">
                                <img src="assets/img/return.png" alt="order return" className='max-w-[47px] h-[47px] w-full object-center object-cover' />
                                <span className='text-[18px] mt-[20px]'>Return Request</span>
                            </div>
                            <FaArrowRightLong />
                            <div className="max-w-[134px] h-[97px] flex flex-col justify-center items-center text-center">
                                <img src="assets/img/pickup.png" alt="order return" className='max-w-[47px] h-[47px] w-full object-center object-cover' />
                                <span className='text-[18px] mt-[20px]'>Pickup</span>
                            </div>
                            <FaArrowRightLong />
                            <div className="max-w-[134px] h-[97px] flex flex-col justify-center items-center text-center">
                                <img src="assets/img/delivered.png" alt="order return" className='max-w-[47px] h-[47px] w-full object-center object-cover' />
                                <span className='text-[18px] mt-[20px]'>Delivered</span>
                            </div>
                            <FaArrowRightLong />
                            <div className="max-w-[134px] h-[97px] flex flex-col justify-center items-center text-center">
                                <img src="assets/img/quantity.png" alt="order return" className='max-w-[47px] h-[47px] w-full object-center object-cover' />
                                <span className='text-[18px] mt-[20px]'>Quantity Check</span>
                            </div>
                            <FaArrowRightLong />
                            <div className="max-w-[134px] h-[97px] flex flex-col justify-center items-center text-center">
                                <img src="assets/img/Refund.png" alt="order return" className='max-w-[47px] h-[47px] w-full object-center object-cover' />
                                <span className='text-[18px] mt-[20px]'>Refund</span>
                            </div>

                        </div>
                    </div>
                    {/* FAQ list */}
                    <div className="block pt-[40px]">
                        {FaqList.map((item, index) => (
                            <div key={index} className="block w-full border-b border-b-[#dcdcdc]">
                                <div className="flex justify-between items-center cursor-pointer pt-4 pb-4" onClick={() => toggleMenu(index)}>
                                    <p className='text-[22px] font-medium tracking-wider'>{item.question}</p>
                                    {menuOpen === index ? <FaMinus /> : <FaPlus />}
                                </div>

                                {menuOpen === index && (
                                    <div className="block pb-4">
                                        {item.type === 'text' && (
                                            <p className='text-[18px] whitespace-pre-line'>{item.answer}</p>
                                        )}

                                        {item.type === 'image' && (
                                            <img src={item.answer} alt="FAQ visual" className="max-w-full h-auto rounded shadow" />
                                        )}

                                        {item.type === 'list' && item.sections && item.sections.map((section, secIndex) => (
                                            <div key={secIndex} className="mb-4">
                                                {section.title && (
                                                    <p className='text-[18px] font-bold mb-2'>{section.title}</p>
                                                )}
                                                {section.description && (
                                                    <p className='text-[18px] font-medium mb-2'>{section.description}</p>
                                                )}

                                                <ul className='list-decimal pl-5 space-y-2'>
                                                    {section.list.map((point, i) => (
                                                        <li key={i} className='text-[18px]  whitespace-pre-line'>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Return;