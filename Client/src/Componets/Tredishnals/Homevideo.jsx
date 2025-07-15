import React, { useState } from 'react';

const Homevideo = () => {
    const [play1, setPlay1] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [play3, setPlay3] = useState(false);


    return (
        <div className='main py-[15px]'>
            <div className="max-w-screen-xxl mx-auto px-[5px]">
                <div className="flex md:flex-row gap-4 justify-center">

                    {/* Video 1 */}
                    <div className="w-full cursor-pointer">
                        {play1 ? (
                            <iframe
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
                                src="https://www.youtube.com/embed/q7eMoBeK8v0?autoplay=1"
                                title="YouTube video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="cursor-pointer" onClick={() => setPlay1(true)}>
                                <img
                                    src="./assets/img/tre-video1.jpg"
                                    alt="video 1 thumbnail"
                                    className="w-full h-[100%] sm:h-[400px] md:h-[450px] object-cover"
                                />

                            </div>
                        )}
                    </div>

                    {/* Video 2 */}
                    <div className="w-full cursor-pointer">
                        {play2 ? (
                            <iframe
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
                                width="560" height="315" src="https://www.youtube.com/embed/6p6xzZh5S4E?si=p5kBNzWVEeWDjUSd"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        ) : (
                            <div className="cursor-pointer" onClick={() => setPlay2(true)}>
                                <img
                                    src="./assets/img/tre-video2.jpg"
                                    alt="video 2 thumbnail"
                                    className="w-full h-[100%] sm:h-[400px] md:h-[450px] object-cover"
                                />

                            </div>
                        )}
                    </div>

                </div>

                <div className="flex py-[20px] ">
                    {/* Video 3 */}
                    <div className="w-full cursor-pointer">
                        {play3 ? (
                            <iframe
                                className="w-full h-[400px] sm:h-[400px] md:h-[450px]"
                                width="560" height="315" src="https://www.youtube.com/embed/UN3MyuUjcuQ?si=ntg0AE4-BY8bKnFt"
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        ) : (
                            <div className="cursor-pointer" onClick={() => setPlay3(true)}>
                                <img
                                    src="./assets/img/tre-video3.jpg"
                                    alt="video 1 thumbnail"
                                    className="w-full "
                                />
                            </div>
                        )}
                    </div>

                    <div className="text w-[60%] px-[50px]">
                        <h4 className='text-[40px] font-semibold pt-[20px]'>Nikhil Thampi X Dhaneri</h4>
                        <span className='bg-[#000] w-[155px] h-[5px] block my-[10px]'></span>
                        <p className='text-[16px] font-semibold mb-[30px] leading-8'>
                            Dhaneri proudly presents an exclusive collaboration with the visionary designer Nikhil Thampi. Explore a collection inspired by the Taj Mahal's architectural wonder, showcasing exquisite silhouettes, delicate paisley floral, embroidered motifs, and intricate filigree foliage. Immerse yourself in the rich palette of jewel tones and regal accents, experiencing timeless grandeur and festive glamour that harmoniously fuses tradition with contemporary finesse.
                        </p>
                        <div className="flex justify-center">
                            <a className='bg-[#000] text-[#fff] rounded-full font-semibold uppercase text-[17px] px-[20px] py-[10px]' href="">SHOP THE COLLECTION</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homevideo;
