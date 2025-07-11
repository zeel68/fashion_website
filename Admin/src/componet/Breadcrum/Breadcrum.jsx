import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = ({ path, current }) => {
    const steps = path && Array.isArray(path) ? path : ["Home"];

    return (
        <div className=" max-w-screen-xxl breadcrum text-[16px] font-medium text-black flex flex-wrap items-center gap-[8px]">
            {steps.map((item, index) => (
                <React.Fragment key={index}>
                    <span>{item}</span>
                    <IoIosArrowForward className="w-[12px] h-[12px] object-contain" />
                </React.Fragment>
            ))}
            <span className="text-black">{current}</span>
        </div>
    );
};

export default Breadcrum;

