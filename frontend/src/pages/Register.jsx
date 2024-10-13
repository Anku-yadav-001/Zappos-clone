import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; 
import { toast } from "react-toastify"; 

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post("https://zappos-clone.onrender.com/auth/register", {
                name,
                email,
                password,
            });
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/login');
            }, 4000);
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 409) {
                    toast.error(data.message); 
                } else if (status === 400) {
                    toast.error(data.message);
                } else {
                    toast.error("Failed to register"); 
                }
            } else {
                toast.error("Failed to register"); 
            }
        }
    };

    return (
        <>
            <div className="w-full max-w-md m-auto p-4">
                <div className="flex justify-center">
                    <img
                        src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
                        alt="Zappos Logo"
                        className="h-12"
                    />
                </div>
                <div className="border border-gray-300 space-y-4 p-6 rounded-md">
                    <h1 className="text-2xl font-semibold text-center">Create Account</h1>
                    <form onSubmit={handleRegister}>
                        <div>
                            <label htmlFor="name" className="block text-md">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="block border w-full p-2 rounded-md"
                                placeholder="First and last name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-md">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="block border w-full p-2 rounded-md"
                                placeholder="Enter email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="block border w-full p-2 rounded-md"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full rounded-md bg-blue-900 text-white p-2 my-4 hover:bg-blue-700 transition"
                        >
                            Create Zappos Account
                        </button>
                    </form>
                    <p className="text-sm text-center">Need additional help? Don't worry! You can reach us via phone, text, or live chat. See here for contact details.</p>
                    <p className="text-sm text-center">
                        Already have an account? 
                        <span className="text-blue-700 font-bold">
                            <Link to="/login"> Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
