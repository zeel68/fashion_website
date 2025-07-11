import React, { useState } from 'react';
import ph_imagelight from '../../assets/ph_image-light.png';

const Addproduct = () => {
    const [image, setImage] = useState(false);
    const [image2, setImage2] = useState(null);

    const [showproduct, setShowProduct] = useState({
        name: "",
        image: "",
        img2: "",
        category: "women",
        price: "",
        oldprice: ""
    });

    // const imageHandler = (e) => {
    //     setImage(e.target.files[0]);
    // };

    // const imageHandler2 = (e) => {
    //     setImage2(e.target.files[0]);
    // };


    const changeHandler = (e) => {
        setShowProduct({ ...showproduct, [e.target.name]: e.target.value });
    };

    const Add_Product = async (e) => {
        e.preventDefault();
        console.log(showproduct);
        let responseData;
        let responseData2;

        let product = showproduct;

        let formData = new FormData();
        formData.append('product', image);

        let formData2 = new FormData();
        formData2.append('product', image2);

        await fetch('http://localhost:4040/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data });

        await fetch('http://localhost:4040/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData2,
        }).then((resp) => resp.json()).then((data) => { responseData2 = data });

        if (responseData.success && responseData2.success) {
            product.image = responseData.img_url;
            product.img2 = responseData2.img_url;
            console.log(product);

            await fetch('http://localhost:4040/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("product added") : alert("failed")
            });
        }

    };

    return (
        <div className="max-w-screen-xxl h-[100vh] bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-[15px]">
                <h2 className="text-2xl font-bold mb-[10px] text-center text-gray-700">Add Product</h2>

                <form className="space-y-5" onSubmit={Add_Product}>
                    {/* Product Name */}
                    <div>
                        <label className="block text-gray-600 mb-[5px]">Product Name</label>
                        <input
                            value={showproduct.name}
                            onChange={changeHandler}
                            type="text"
                            name="name"
                            placeholder="Type name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00538A]"
                        />
                    </div>

                    {/* Product Price */}
                    <div>
                        <label className="block text-gray-600 mb-1">Product Price</label>
                        <input
                            value={showproduct.price}
                            onChange={changeHandler}
                            type="text"
                            name="price"
                            placeholder="Type price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00538A]"
                        />
                    </div>

                    {/* Old Price */}
                    <div>
                        <label className="block text-gray-600 mb-1">Old Price</label>
                        <input
                            value={showproduct.oldprice}
                            onChange={changeHandler}
                            type="text"
                            name="oldprice"
                            placeholder="Type old price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00538A]"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-600 mb-1">Category</label>
                        <select
                            value={showproduct.category}
                            onChange={changeHandler}
                            name="category"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#00538A]"
                        >
                            <option value="Women_clothing">Women_clothing</option>
                            <option value="KurtaSet">KurtaSet</option>
                            <option value="SalwarKameez">SalwarKameez</option>
                            <option value="Lehengas">Lehengas</option>
                            <option value="Sarees">Sarees</option>
                            <option value="Mens">Mens</option>
                            <option value="Kids">Kids</option>
                            <option value="Jewellery">Jewellery</option>
                            <option value="Blouses">Blouses</option>
                            <option value="Dupattas">Dupattas</option>
                            <option value="Festivals">Festivals</option>
                            <option value="Home_Living">Home_Living</option>
                            <option value="customerstories">customerstories</option>

                        </select>
                    </div>

                    {/* Upload Image */}
                    {/* <div>
                        <label htmlFor="file-input" className="block text-gray-600 mb-1">
                            <img
                                alt="upload"
                                className="w-8 mb-[5px]"
                                src={image ? URL.createObjectURL(image) : ph_imagelight}
                            />
                        </label>
                        <input
                            onChange={imageHandler}
                            type="file"
                            name="img"
                            id="file-input"
                            className="w-full"
                        />
                        <input
                            onChange={imageHandler2}
                            type="file"
                            name="img2"
                            id="file-input"
                            className="w-full"
                        />
                    </div> */}

                    <div>
                        <label className="block text-gray-600 mb-1">Upload Main Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full"
                        />
                        <img
                            alt="main preview"
                            className="w-12 mt-2"
                            src={image ? URL.createObjectURL(image) : ph_imagelight}
                        />
                    </div>

                    {/* Upload Hover Image */}
                    <div>
                        <label className="block text-gray-600 mb-1">Upload Hover Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage2(e.target.files[0])}
                            className="w-full"
                        />
                        <img
                            alt="hover preview"
                            className="w-12 mt-2"
                            src={image2 ? URL.createObjectURL(image2) : ph_imagelight}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#00538A] hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition duration-200"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;
