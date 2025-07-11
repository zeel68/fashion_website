import React from 'react'
import { Link } from 'react-router-dom'

const Testimonialprop = ({ img, id }) => {
    return (
        <>

            <div className="px-[5px] w-full">
                <div className="img relative group w-full">
                    <img className='w-full block' src={img} alt="homeofferimg" />

                    <div className="hover absolute inset-0 text-white bg-[rgba(0,0,0,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                        <p className="text-sm mb-2">
                            Ivory Floral Print Cotton Anarkali Kurta With Printed Pants And Dupatta (Set of 3)
                        </p>
                        <div className="flex justify-around gap-4 text-sm mb-2">
                            <span>₹2200</span>
                            <span className="line-through">₹5500</span>
                            <span className="font-semibold">60% off</span>
                        </div>
                        <a
                            className="bg-[#d4b952] text-white text-[9px] uppercase cursor-pointer px-4 py-2"
                            href="#"
                        >
                            <Link to={`/saree/${id}`} onClick={() => window.scrollTo(0, 0)}>
                                Get the Look
                            </Link>

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonialprop