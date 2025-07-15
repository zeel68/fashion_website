import React from 'react'
import ProductD from '../componet/ProductDetails/ProductD'
import Footer from '../componet/Footer/Footer'

const ProductDetails = () => {
    return (
        <>
            <div className="bg-[#E0F0FB] min-h-screen flex flex-col">
                <ProductD />
                <Footer />
            </div>
        </>
    )
}

export default ProductDetails