import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const navigate = useNavigate();

    const VerifyPlayment = async () => {
        try {
            const response = await axios.post("http://localhost:4040/api/order/verify", {
                success,
                orderId
            });

            if (response.data.success) {
                navigate("/myorder");
            } else {
                navigate("/");
            }
        } catch (err) {
            console.error("Verification Error:", err);
            navigate("/");
        }
    };

    useEffect(() => {
        VerifyPlayment();
    }, []);

    return (
        <div className="py-[15px]">
            <div className="max-w-screen-xxl mx-auto px-[15px]">
                <div className="min-h-[60vh] grid">
                    <div className="w-[100px] h-[100px] self-center border-8 border-[#bdbdbd] border-t-red-600 rounded-[50%] animate-spin" />
                </div>
            </div>
        </div>
    );
};

export default Verify;
