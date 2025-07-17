
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import Breadcrum from '../Breadcrum/Breadcrum';

const FAQ = () => {
    const [menuOpen, setMenuOpen] = useState(null);
    const toggleMenu = (index) => {
        setMenuOpen(menuOpen === index ? null : index);
    };
    const [recent, setrecent] = useState(null);
    const toggleMenurecet = (index) => {
        setrecent(recent === index ? null : index);
    };

    const FaqList = [
        {
            question: 'Delivery was attempted but I was unavailable. What next?',
            type: 'text',
            answer:
                'Do not worry, our courier will try to reattempt to deliver in next 2 days. In case parcel is still not delivered you can call or email us so you can submit your delivery request to the courier.',
        },
        {
            question: 'Does Dhanerifashion.com Offer Cash on Delivery (COD)?',
            type: 'text',
            answer:
                'COD is available for selected locations/Pin codes in India only. COD limit is up to 18000 INR. Please Note - For COD orders, the style will come in standard measurements as mentioned in the size chart. Customisation is not available for COD orders.',
        },
        {
            question: 'Will I Receive a Quality Product by Dhaneri Fashion?',
            type: 'text',
            answer:
                'As an international brand, we adhere to strict quality and design benchmarks. Every KALKI product goes through a 5 step Quality Control process to ensure that you receive the best.',
        },
        {
            question: 'The order status is "Delivered" but not received it. What should I do?',
            type: 'text',
            answer:
                'Check with your neighbor/front desk, etc. if someone accepted the package. Try to contact the courier to cross check if someone has signed the package. If no one accepted delivery email us on info@Dhanerifashion.com . Once you get the tracking details of the shipping we request you to estimate us if the product doesnt delivered within 10-15 days of the dispatched, So that we can coordinate with our logistics partner If there is no update about the delivery we will consider the order has been delivered, hence you cannot apply for the refund.',
        },
        {
            question: 'How to track the order once shipped?',
            type: 'text',
            answer:
                'As an international brand, we adhere to strict quality and design benchmarks. Every KALKI product goes through a 5 step Quality Control process to ensure that you receive the best.',
        },
        {
            question: 'What is the process for Refund/Replace?',
            type: 'text',
            answer:
                'Please follow the below process  To return an item, send us an email at info@Dhanerifashion.com or reach out to us on Whatsapp.Share a photo showing the condition of the item with a detailed reason for Refund / Replace.Our Return team and our fitting experts will get in touch with you accordingly.A quality check is performed the day we receive the outfit back.If the outfit passes the quality check, we will issue an exchange or refund on the same source of the payment.Need any assistance email us atclaims @Dhanerifashion.com',
        },
        {
            question: 'How does on demand delivery work?',
            type: 'image',
            answer: '/assets/img/faq.png'
        },
    ];
    const Recent = [
        {
            question: 'Can I exchange or return my order?',
            type: 'text',

            answer:
                'For Indian customers Exchange and returns are available for products within 48 hours of delivery. Items must be in original condition with all tags intact. Pick up in India is free. ',

        },
        {
            question: 'Are There Any Reserve Pick-Up Charges?',
            type: 'text',

            answer:
                'For Indian Customers:Pick-up is free within India.',

        },
        {
            question: 'Can I exchange or return my order?',
            type: 'text',

            answer:
                'For Indian customers Exchange and returns are available for products within 48 hours of delivery. Items must be in original condition with all tags intact. Pick up in India is free. ',

        },
        {
            question: 'Are there Custom charges?',
            type: 'list',
            answer: [
                "For Indian Customers :",
                "Product Prices displayed are inclusive of all taxes and duties. For International Customers :",
                "We understand that for customers outside India, its important to note that the price provided does not include duties. We genuinely care about your experience and want to ensure transparency. Please keep in mind that any additional costs such as import duties, custom fees, or local taxes are the responsibility of the customers and should be paid separately",
            ]


        },
        {
            question: 'Are there any currency conversion charges?',
            type: 'text',

            answer:
                'Please note, there are additional currency rate charges levied by your bank on your credit/debit card in case you are making the payment in INR or any other foreign currency apart from your originated currency. These charges are non-refundable.',

        },
        {
            question: 'Does Dhaneri own stores outside Mumbai?',
            type: 'multiSection',
            sections: [
                {
                    title: 'Flagship Stores',
                    description: "Apart from our first flagship store in Santacruz, Mumbai, we've opened several stores across India, with many more in the making.",
                    list: [
                        "South Ex-2, New Delhi",
                        "Ambli-Bopal Road, Ahmedabad",
                        "Jayanagar, Bengaluru",
                        "Athwalines, Surat",
                        "Banjara Hills, Hyderabad",
                        "Pitampura, Delhi",
                    ],
                },
                {
                    title: 'Multi-Designer Stores',
                    description: "KALKI presents curated collection at select multi-designer stores around the world.",
                    nestedLists: [
                        {
                            country: 'INDIA',
                            stores: [
                                'Megaan, Delhi',
                                'Ole Couture, Delhi',
                                'Agashe, Delhi',
                                'Studio Prive, Ludhiana',
                                'Marquis, Jaipur',
                                'Citrine, Kolkata',
                                'Armidio, Bengaluru',
                            ]
                        },
                        {
                            country: 'AUSTRALIA',
                            stores: ['Paaro, Melbourne', 'Karegar, Melbourne']
                        },
                        {
                            country: 'UNITED KINGDOM',
                            stores: ['Nikaza Asian Couture, London', "Lilly's Boutique, London", "Roop's Couture, London"]
                        },
                        {
                            country: 'UNITED STATES',
                            stores: ['Nyraa, New York']
                        },
                    ]
                }
            ]
        }, {
            question: 'I am not able to use the filter on your website.',
            type: 'text',

            answer:
                'Please note, there are additional currency rate charges levied by your bank on your credit/debit card in case you are making the payment in INR or any other foreign currency apart from your originated currency. These charges are non-refundable. ',

        }


    ]
    return (
        <div className='main py-[30px]'>
            <div className="max-w-screen-xxl mx-auto px-[15px] w-[80%]">

                <Breadcrum current="FAQ" />
                <div className="w-full">



                    <div className="block text-center">
                        <h1 className="text-[40px] font-['Inter'] font-bold">FAQ</h1>
                    </div>

                    <div className="block pt-[80px]">
                        <p className="text-[28px] font-['Inter'] font-bold tracking-wider">Popular Question</p>
                    </div>

                    <div className="block pt-[40px]">
                        {FaqList.map((item, index) => (
                            <div key={index} className="block w-full border-b border-b-[#dcdcdc]">

                                <div className="flex flex-wrap justify-between items-center cursor-pointer pt-4 pb-4" onClick={() => toggleMenu(index)}>
                                    <p className='text-[22px] font-medium tracking-wider'>{item.question}</p>
                                    {menuOpen === index ? <FaMinus /> : <FaPlus />}
                                </div>

                                {menuOpen === index && (
                                    <div className="block pb-4">
                                        {item.type === 'text' ? (
                                            <p className='text-[18px] tracking-wider text-[#121212B2] font-medium'>{item.answer}</p>
                                        ) : (
                                            <img src={item.answer} alt="FAQ Answer" className="w-full max-w-[50%] h-[50%] rounded shadow" />
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="block pt-[40px]">
                        <p className="text-[28px] font-['Inter'] font-bold tracking-wider">Popular Question</p>
                    </div>

                    <div className="block pt-[30px]">
                        {Recent.map((item, index) => (
                            <div key={index} className="block w-full border-b border-b-[#dcdcdc]">

                                <div className="flex flex-wrap justify-between items-center cursor-pointer pt-4 pb-4" onClick={() => toggleMenurecet(index)}>
                                    <p className='text-[22px] font-medium tracking-wider'>{item.question}</p>
                                    {recent === index ? <FaMinus /> : <FaPlus />}
                                </div>

                                {recent === index && (
                                    <div className="block pb-4">

                                        {item.type === 'text' && (
                                            <p className='text-[18px]'>{item.answer}</p>
                                        )}

                                        {item.type === 'list' && (
                                            <ul className='list-disc space-y-2'>
                                                <p className='text-[18px] font-bold'>{item.title}</p>

                                                {item.answer.map((point, i) => (

                                                    <li key={i} className='text-[18px] list-none'>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {/* nested list */}
                                        {item.type === 'multiSection' && (
                                            <div className="space-y-4">
                                                {item.sections.map((section, secIndex) => (
                                                    <div key={secIndex}>
                                                        <p className="text-[20px] font-bold mb-1">{section.title}</p>
                                                        {section.description && (
                                                            <p className="text-[16px] mb-2">{section.description}</p>
                                                        )}

                                                        {section.list && (
                                                            <ul className="list-disc pl-5 space-y-1">
                                                                {section.list.map((store, i) => (
                                                                    <li key={i} className="text-[18px]">{store}</li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                        {section.nestedLists && section.nestedLists.map((country, i) => (
                                                            <div key={i} className="mt-2">
                                                                <p className="text-[18px] font-semibold">{country.country}</p>
                                                                <ul className="list-disc pl-5 space-y-1">
                                                                    {country.stores.map((store, j) => (
                                                                        <li key={j} className="text-[18px]">{store}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>
                        ))
                        }
                    </div >
                </div >

            </div >
        </div >
    );
};

export default FAQ;
