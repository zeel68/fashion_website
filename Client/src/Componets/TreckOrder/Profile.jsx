import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="max-w-screen-xxl mx-auto px-4 py-10">
                <div className="bg-[#f3f3f3] p-2 w-[70%]">

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                        <div className="bg-white p-6 rounded shadow border space-y-4">
                            <input
                                type="email"
                                placeholder="aesvi2003@gmail.com"
                                className="w-full border p-2 rounded"
                            />

                            <div className="flex gap-4">
                                <select className="w-1/3 border p-2 rounded text-gray-500">
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-2/3 border p-2 rounded focus:outline-none"
                                />
                            </div>

                            <button className="w-full bg-[#d3b951] text-white py-1 rounded hover:bg-yellow-700 transition">
                                EDIT
                            </button>
                        </div>
                    </div>

                    {/* Primary Information */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Primary Information</h2>
                        <div className="bg-white p-6 rounded shadow border space-y-3">

                            <div className="flex justify-between">
                                <label className="text-gray-600">First Name</label>
                                <p className="text-gray-800">user</p>
                            </div>

                            <div className="flex justify-between">
                                <label className="text-gray-600 flex items-center gap-1">
                                    Last Name <span className="text-red-600 text-xl leading-none">*</span>
                                </label>
                                <p className="text-gray-800">surname</p>
                            </div>

                            <div className="flex justify-between">
                                <label className="text-gray-600">Gender</label>
                                <p className="text-gray-800 font-medium">Female</p>
                            </div>

                            <div className="flex justify-between">
                                <label className="text-gray-600">Date of Birth</label>
                                <p className="font-semibold">01-01-1990</p>
                            </div>

                            <div className="flex justify-between">
                                <label className="text-gray-600">Password</label>
                                <p className="text-gray-800">***********</p>
                            </div>

                            <button className="w-full bg-[#d3b951] text-white py-1 rounded hover:bg-yellow-700 transition">
                                EDIT
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile