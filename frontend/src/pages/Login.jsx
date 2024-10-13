import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import axios from "axios"; 
import { toast } from "react-toastify";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post("https://zappos-clone.onrender.com/auth/login", {
                email,
                password,
            });

            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("userName", response.data.name);
            localStorage.setItem("isAuthenticated", true);

            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/');
            }, 4000);
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 404) {
                    toast.error(data.message);
                } else if (status === 403) {
                    toast.error(data.message); 
                } else {
                    toast.error("Failed to login");
                }
            } else {
                toast.error("Failed to login"); 
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
                <div className="border border-gray-400 space-y-4 p-6 rounded-md">
                    <h1 className="text-2xl font-semibold text-center">Sign-In</h1>
                    <form onSubmit={handleLogin}> 
                        <div>
                            <label htmlFor="email" className="block text-md">Email</label>
                            <input
                                type="text"
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
                            Sign In
                        </button>
                    </form>
                    <hr className="my-6 border border-gray-600" />
                    <p className="text-[12px] text-center">New Zappos Account</p>
                    <button className="w-full rounded-md font-bold border border-blue-900 text-blue-900 p-2">
                        <Link to="/register">Create Zappos Account</Link>
                    </button>
                </div>
            </div>
        </>
    );
}
