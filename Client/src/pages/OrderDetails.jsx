import React, { useContext } from 'react'
import Footer from '../componet/Footer/Footer'
import Orderdetails from '../componet/OrderDetails/OrderDetails'

const OrderDetails = () => {
    return (
        <>
            <div className="bg-[#E0F0FB]">
                <Orderdetails />
                <Footer />
            </div>
        </>
    )
}

export default OrderDetails
