import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Context';


const Reviews = () => {
    const { id } = useParams();

    const { products } = useContext(ProductContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const [reviews, setreviews] = useState({
        rating: '',
        comment: '',
        title: ''
    })

    const handlesubmit = async (e) => {
        e.preventdefault();
        try {
            const newFormdata = new FormData();
            newFormdata.append('rating', reviews.rating)
            newFormdata.append('comment', reviews.comment)
            newFormdata.append('title', reviews.title)

            const res = await postAReview(newFormdata);
            if (res.status === 201) {
                enq
            }

        } catch (error) {

        }
    }
    // const filtered = products.filter(item => item.name?.toLowerCase().includes(category?.toLowerCase()));

    useEffect(() => {
        const Review = async () => {
            try {
                const response = await fetch(`http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/products/${id}/reviews`);
                const data = await response.json();
                setProduct(data.data.product);
                console.log("Review: ", data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                setError("Failed to fetch product details.");
            }
        };

        Review();
    }, [id]);
    if (error) return <div className="text-black font-bold">{error}</div>;
    if (!product) return <div className="text-black font-bold">Product not found</div>;


    return (
        <>
            <h1>dfghj</h1>
        </>
    )
}

export default Reviews