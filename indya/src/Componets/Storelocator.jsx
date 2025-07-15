import React, { useEffect, useState } from 'react'

const images = [
    '/assets/img/storelocation1.jpg',
    '/assets/img/storelocation2.jpg',
    '/assets/img/storelocation3.jpg'
]


const storeData = {
    "New Delhi": [
        {
            title: "Rajouri Garden, New Delhi",
            address: "Unit No. J - 136 A, Main Market, Rajouri Garden, New Delhi - 110027",
            contact: "+91 7303822820",
            email: "indyaluxerajouri@houseofindya.com",
        },
        {
            title: "Rajouri Garden 2, New Delhi",
            address: "Unit no. J-89 Main Market, Rajouri Garden, New Delhi - 110027",
            contact: "+91-9289369844",
            email: "Indyaluxerajourinew@houseofindya.com",
        },
    ],
    "Mumbai": [
        {
            title: "Andheri West, Mumbai",
            address: "Shop 23, Lokhandwala Market, Andheri West, Mumbai - 400053",
            contact: "+91 9988776655",
            email: "indyamumbai@houseofindya.com",
        },
        {
            title: "Andheri West, Mumbai",
            address: "Shop 23, Lokhandwala Market, Andheri West, Mumbai - 400053",
            contact: "+91 9988776655",
            email: "indyamumbai@houseofindya.com",
        },
        {
            title: "Andheri West, Mumbai",
            address: "Shop 23, Lokhandwala Market, Andheri West, Mumbai - 400053",
            contact: "+91 9988776655",
            email: "indyamumbai@houseofindya.com",
        },
        {
            title: "Andheri West, Mumbai",
            address: "Shop 23, Lokhandwala Market, Andheri West, Mumbai - 400053",
            contact: "+91 9988776655",
            email: "indyamumbai@houseofindya.com",
        },
        {
            title: "Andheri West, Mumbai",
            address: "Shop 23, Lokhandwala Market, Andheri West, Mumbai - 400053",
            contact: "+91 9988776655",
            email: "indyamumbai@houseofindya.com",
        },
    ],
    "Surat": [
        {
            title: "Surat City Mall",
            address: "Shop No. 14, 1st Floor, Ring Road, Surat - 395002",
            contact: "+91 9123456789",
            email: "indyasurat@houseofindya.com",
        },
    ],
    "Bangalore": [
        {
            title: "Phoenix Mall, Bangalore",
            address: "Unit G-12, Phoenix Marketcity, Whitefield, Bangalore - 560048",
            contact: "+91 9876543210",
            email: "indyabangalore@houseofindya.com",
        },
    ],
};

const Storelocator = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const [selectedCity, setSelectedCity] = useState('');

    return (
        <>
            <div className="max-w-[1440px] mx-auto px-4 py-10">
                {/* top */}
                <div className="text-center mb-8">
                    <h2 className="text-[40px] font-bold uppercase text-[#d3b951]">
                        Store Locator
                    </h2>
                    <div className="mx-auto mt-1 w-[120px] h-[4px] bg-black"></div>
                </div>

                {/* main section */}
                <div className="flex">
                    {/* Lefe*/}
                    <div className="md:w-1/2 w-full h-[500px] bg-[#ede8d8] p-5">
                        {/* Dropdown */}

                        <select
                            className="w-full border p-2 mb-4"
                            onChange={(e) => setSelectedCity(e.target.value)}
                            value={selectedCity}
                        >
                            <option value="">--Select City--</option>
                            {Object.keys(storeData).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>


                        {/* Store List */}
                        <div className="scroll max-h-[400px] overflow-y-auto pr-2">
                            <h3 className="text-[17px] uppercase font-bold text-[#c6a55a] pb-[15px] mb-[15px] border-b">Exclusive Brand Outlets</h3>

                            <div className="space-y-6 text-sm text-black h-100%">

                                <div className="space-y-6 text-sm text-black">
                                    {selectedCity && storeData[selectedCity] ? (
                                        storeData[selectedCity].map((store, idx) => (
                                            <div key={idx}>
                                                <h4 className="font-bold">{store.title}</h4>
                                                <p>{store.address}</p>
                                                <p>Contact: {store.contact}</p>
                                                <p>Email: {store.email}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">Please select a city to view stores.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className=" w-full">

                        <div className="w-full h-[500px] overflow-hidden relative">
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`slide - ${index}`}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Storelocator