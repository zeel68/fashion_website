import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import Breadcrum from '../Breadcrum/Breadcrum';

const Hometop = () => {
    return (
        <div className="py-[15px]">
            <div className="max-w-screen-xxl mx-auto px-[15px]">
                <div className="flex md:flex-row justify-between md:items-center sm:none">

                    <div className="md:mb-0">
                        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                        <Breadcrum className="text-[#00538A]" current="Dashboard" />
                    </div>
                    <div className="text-sm font-medium flex items-center text-gray-700 ">
                        <FaRegCalendarAlt className="mr-[5px] text-base " />
                        Oct 11, 2023 -
                        Nov 11, 2022
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hometop;
