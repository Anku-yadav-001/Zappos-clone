import { useAuth0 } from "@auth0/auth0-react";

export function SideBar() {

    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();

    return <>
        <h2 className="text-2xl font-bold mb-6">My Bag</h2>

        <div className="space-y-4 border-t border-gray-600 py-4">
            {isAuthenticated?<p>
            Fill up your Bag by checking out all the awesome things you can buy on Zappos.com or by adding items from Your Favorites!
            </p>
            :
            <p className="text-sm">
                Nothing to see here yet! Sign in to see items that you've previously placed in your Bag or check out all the awesome things you can buy on Zappos.com!
            </p>}

            <div>
                <ul className="flex justify-between font-semibold">
                    {isAuthenticated?<>
                        <li>Shop Women's</li>
                    <li>Shop Men's</li>
                    <li>Shop Shoes</li>
                    <li>Brand List</li>
                    </>:<>
                        <li>Sign In </li>
                    <li>Home Page</li>
                    <li>Brand List</li>
                    <li>Contact Us</li>
                    </>}
                </ul>

            </div>
            <div className="flex justify-center">
                <div className="text-center">
                    <img src="https://www.zappos.com/marty-assets/empty-cart.aa012412a3668eb7151b6731c716a428.svg" alt="" />
                        <div className="space-x-4">
                    {!isAuthenticated?<button className="bg-black text-white px-6 py-2 rounded-lg font-semibold mt-6">Sign In</button>:""}
                       </div>
                </div>
            </div>
        </div>
    </>
}