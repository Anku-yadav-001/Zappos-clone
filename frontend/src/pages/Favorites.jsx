import { HiDotsHorizontal } from "react-icons/hi";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export function Favorites() {
    return (
        <>
            <Navbar />
            <div className="w-[95%] m-auto">
                <div className="flex space-x-2 text-sm my-8">
                    <p>Account Overview</p>
                    <span>/</span>
                    <p className="font-bold">Favorites</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl">Favorites</div>
                    <div className="font-bold border border-black px-4 py-2 rounded-md">Create New List</div>
                </div>
                <div className="my-4 border border-gray-400 w-full md:w-[30%] h-[35vh] relative rounded-md mx-auto">
                    <div className="flex justify-center items-center w-full h-full">
                        <img 
                            src="https://www.zappos.com/marty-assets/new_collection_icon.a323b804fdac4f2bd998477db11b3f0f.svg" 
                            alt="" 
                            className="max-w-full max-h-full object-contain" 
                        />
                    </div>
                    <div className="flex justify-between items-center bg-gray-200 p-2 absolute bottom-0 w-full">
                        <div>
                            <h1 className="font-bold text-base sm:text-lg">Hearts</h1>
                            <p className="text-sm sm:text-base">0 items</p> 
                        </div>
                        <div>
                            <HiDotsHorizontal size={24} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
