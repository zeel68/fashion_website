import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <div className="max-w-screen-xxl mx-auto px-4 py-10">
        <div className="bg-[#f3f3f3] p-2 ">
          <h2 className='text-lg font-bold'>My Orders</h2>

          <div className="w-full p-6 bg-white shadow-md rounded-lg text-sm text-gray-800 ">
            <h2 className="text-xl font-semibold">Hi, there!</h2>
            <p>We hope you're enjoying shopping with us.</p>
            <p>Should you have any issues related to our products and services, please reach out to our customer care team at:</p>

            <div className='pt-3'>
              <h3 className="font-semibold">Email:</h3>
              <p className="">customercare@dhaneri.com</p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Customer Care:</h3>
              <p className="flex items-center space-x-2">
                <FaWhatsapp size={15} />
                <span>+91-8929987349</span>
              </p>
              <p>(Monday - Saturday, 9:00 AM - 6:00 PM)</p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Head Office Address:</h3>
              <p>High Street Essentials Pvt Ltd</p>
              <p>C-39, C Block, Sector 58, Noida</p>
              <p>Uttar Pradesh – 201301, India</p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Return Address:</h3>
              <p>High Street Essentials Pvt Ltd</p>
              <p>Plot No-39, Block-C, Sector-58,</p>
              <p>Noida, Uttar Pradesh – 201301, India</p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Trade Sales</h3>
              <p>For wholesale or bulk inquiries, please write to us at <span>wholesale@faballey.com</span></p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Press Inquiries</h3>
              <p>For press inquiries, please write to us at <span >press@faballey.com</span></p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Blogger Collaborations</h3>
              <p>If you are a blogger, please write to us at <span>sushmita@faballey.com</span> with your credentials and social media handles.</p>
            </div>

            <div className='pt-3'>
              <h3 className="font-semibold">Affiliate Programme</h3>
              <p>Kindly write to us at <span>affiliates@faballey.com</span> to know more about our affiliate programme.</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact