import React from 'react'

const Boxprop = ({ img }) => {
    return (
        <>
            <div className="px-[15px] w-full">
                <img className='w-full' src={img} alt="homeboximg" />
            </div>
        </>
    )
}

export default Boxprop
