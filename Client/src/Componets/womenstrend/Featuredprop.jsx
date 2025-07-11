import React from 'react'

const Featuredprop = ({ img }) => {
    return (
        <>
            <div className="px-[5px] w-full">
                <div className="img">
                    <img className='w-full block' src={img} alt="homeofferimg" />
                </div>
            </div>
        </>
    )
}

export default Featuredprop