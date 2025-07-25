import React from 'react'
import Hometop from '../componet/Hometop/Hometop'
import Ordercard from '../componet/Ordercard/Ordercard'
import Graph from '../componet/Graph/Graph'
import OrderTable from '../componet/Product/OrderTable'
import Footer from '../componet/Footer/Footer'


const Dashboard = () => {
    return (
        <>
            <div className="font-Rubik min-h-screen flex flex-col">
                <Hometop />
                <Ordercard />
                <Graph />
                <OrderTable />
                <Footer />
            </div>
        </>
    )
}

export default Dashboard