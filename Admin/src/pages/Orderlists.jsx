import React from 'react'
import Footer from '../componet/Footer/Footer'
import OrderList from '../componet/OrderList/Orderlist'

const Orderlists = () => {
    return (
        <>
            <div className="bg-[#E0F0FB]">
                <OrderList />
                <Footer />
            </div>
        </>
    )
}

export default Orderlists