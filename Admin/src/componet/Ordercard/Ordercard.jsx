import React from 'react'
import Oprop from './Oprop'


const Ordercard = () => {
    return (
        <div className="block w-full">
            <div className="grid max-w-screen-xxl mx-auto px-[15px]">
                <div className="flex flex-wrap justify-around">

                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />
                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />
                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />
                    <Oprop text="Total Orders" totle="₹126.500" pr="34.7%" comp="Compared to Oct 2023" />

                </div>
            </div>
        </div>

    )
}

export default Ordercard
