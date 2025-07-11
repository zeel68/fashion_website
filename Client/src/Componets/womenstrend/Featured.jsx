import React from 'react';
import Featuredprop from './Featuredprop';

const Featured = () => {
    return (
        <>
            <div className='main py-[10px]'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">

                        <div className="flex justify-center p-[25px]">
                            <h3 className='text-[25px] font-bold'>
                                AS FEATURED IN
                            </h3>
                        </div>

                        <div className='flex'>
                            <Featuredprop img="./assets/img/wbnr1.jpg" />
                            <Featuredprop img="./assets/img/wbnr2.jpg" />
                            <Featuredprop img="./assets/img/wbnr3.jpg" />
                            <Featuredprop img="./assets/img/wbnr4.jpg" />
                            <Featuredprop img="./assets/img/wbnr5.jpg" />
                            <Featuredprop img="./assets/img/wbnr6.jpg" />
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Featured