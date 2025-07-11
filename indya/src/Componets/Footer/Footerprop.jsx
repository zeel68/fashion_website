import React from 'react'

const Footerprop = ({ items }) => {
    return (
        <>
            <ul className="flex flex-wrap pt-[25px]">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`relative px-2 leading-[30px] ${index !== items.length - 1
                            ? "after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:border-r after:border-gray-600"
                            : ""
                            }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Footerprop