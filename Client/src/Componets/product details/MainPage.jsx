import React, { useContext } from 'react'
import Productdetails from './Productdetails'
// import Breadcrum from '../Breadcrum/Breadcrum'
// import { useParams } from 'react-router-dom';
// import SareesDetails from '../Sarees/Sareedetails';

const MainPage = () => {
    // const { id } = useParams();
    // const product = SareesDetails.find((e) => e.id === Number(id));

    // const path = [
    //     { name: "Home", link: "/" },
    //     { name: "Sarees", link: "/sarees" },
    // ];

    return (
        <>
            {/* {
                product && (
                    <Breadcrum path={path} current={product.name} />
                )
            } */}
            <Productdetails />

        </>
    )
}

export default MainPage