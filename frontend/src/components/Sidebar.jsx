import { Link, useNavigate } from "react-router-dom";

export function SideBar() {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const navigate = useNavigate();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6">My Bag</h2>

            <div className="space-y-4 border-t border-gray-600 py-4">
                {isAuthenticated ? (
                    <p>
                        Fill up your Bag by checking out all the awesome things you can buy on Zappos.com or by adding items from Your Favorites!
                    </p>
                ) : (
                    <p className="text-sm">
                        Nothing to see here yet! Sign in to see items that you've previously placed in your Bag or check out all the awesome things you can buy on Zappos.com!
                    </p>
                )}

                <div>
                    <ul className="flex flex-wrap justify-between font-semibold space-x-4"> 
                        {isAuthenticated ? (
                            <>
                                <li className="flex-1 text-center sm:text-left">Shop Women's</li>
                                <li className="flex-1 text-center sm:text-left">Shop Men's</li>
                                <li className="flex-1 text-center sm:text-left">Shop Shoes</li>
                                <li className="flex-1 text-center sm:text-left">Brand List</li>
                            </>
                        ) : (
                            <>
                                <li className="flex-1 text-center sm:text-left"><Link to="/register">Register</Link></li>
                                <li className="flex-1 text-center sm:text-left">Home Page</li>
                                <li className="flex-1 text-center sm:text-left">Brand List</li>
                                <li className="flex-1 text-center sm:text-left">Contact Us</li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="flex justify-center">
                    <div className="text-center">
                        <img 
                            src="https://www.zappos.com/marty-assets/empty-cart.aa012412a3668eb7151b6731c716a428.svg" 
                            alt="" 
                            className="w-3/4 h-auto mx-auto" 
                        />
                        <div className="space-x-4">
                            {!isAuthenticated && (
                                <button 
                                    className="bg-black text-white px-6 py-2 rounded-lg font-semibold mt-6" 
                                    onClick={() => navigate("/register")}
                                >
                                    Register
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
