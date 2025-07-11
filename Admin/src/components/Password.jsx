import React, { useState } from 'react';

const Password = () => {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== rePassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Password changed to:', password);
        alert('Password reset successful!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full mx-auto p-[20px] rounded shadow-md">
                <h2 className="text-lg font-semibold mb-[10px]">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        className="block border w-full mb-[10px] p-[10px] rounded outline"
                        placeholder="New password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="block border w-full mb-[10px] p-[10px] rounded outline"
                        placeholder="Re-enter new password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                    <button
                        className="bg-[#0053EA] text-white px-[20px] py-[8px] rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Password;
