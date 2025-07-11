import React from 'react'
import Items from '../componet/AllProduct/Items'
import ProductTop from '../componet/AllProduct/ProductTop'
import Footer from '../componet/Footer/Footer'

const Products = () => {
    return (
        <>
            <div className="bg-[#DCE9F2] font-Rubik min-h-screen flex flex-col">
                <ProductTop />
                <Items />
                <Footer />
            </div>
        </>
    )
}

export default Products