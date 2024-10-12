import { useEffect, useRef, useState } from "react";
import womans from "../assets/womans.gif"
import { ProductCard } from "../components/ProductCart.jsx"
import { FaArrowRight } from "react-icons/fa";
import { Navbar } from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { toast } from "react-toastify";
import axios from "axios";
export function Home() {
    const [trendings, setTrendings] = useState([]);
    const [autumn,setAutumn] = useState([])
    const [inspiration,setInspiration] = useState([])
    const [loading, setLoading] = useState(true);
    const  [products, setProducts] = useState([])
    const [exclusive,setExclusive] = useState([])
    const [shopKut,setShopKut] = useState([])

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth',
        });
    };

    const fetchTrendings = async () => {
        try {
            const response = await axios.get( "http://localhost:8080/trend/all-trendings");
            if (response.data.status === 200) {
                setTrendings(response.data.trendings); 
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); 
        }
    };
    const fetchAutumn = async () => {
        try {

            const response = await axios.get( "http://localhost:8080/autumn/all-atumns");
            if (response.data.status === 200) {
                setAutumn(response.data.autumn); 
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); 
        }
    };
    const fetchInspitation = async () => {
        try {
            const response = await axios.get("http://localhost:8080/inspiration/all-inspirations");
            console.log(inspiration )
            if (response.data.status === 200) {
                setInspiration(response.data.inspiration); 
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); 
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/product/all-products",);
            if (response.data.status === 200) {
                setProducts(response.data.products); 
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); 
        }
    };

    const fetchShop = async () => {
        try {
            const response = await axios.get("http://localhost:8080/shop/all-shops");
            if (response.data.status === 200) {
                setShopKut(response.data.shops); 
            } 

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); 
        }
    };

    const fetchExclusives = async () => {
        try {
            const response = await axios.get("http://localhost:8080/exclusive/all-exclusives");
            if (response.data.status === 200) {
                setExclusive(response.data.exclusives); 
            } 

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); 
        }
    };

    useEffect(()=>{
        fetchTrendings()
        fetchAutumn()
        fetchInspitation()
        fetchProducts()
        fetchExclusives()
        fetchShop()
    },[])

    return <>
    <Navbar/>
        <div className="">
            <div className="w-[94%] py-4 m-auto">
                <img src={womans} alt="" />
                <div className="text-center p-4 bg-[rgb(245,234,220)]">
                    <h1 className="font-semibold text-3xl">Head-to-Toe Fall</h1>
                    <h2 className="font-semibold text-lg py-2 underline">Shop Women's Fall Favoriutes</h2>
                </div>

                <h1 className="font-bold text-3xl pt-6 pb-2">Trending Now</h1>
                {
                    loading?<h1>loading...</h1>:<div className="flex">
                    {
                        trendings.map((ele, index) => (
                            <div key={index} className="text-center font-semibold text-[18px] space-y-2">
                                <img src={ele.img} alt="" className="w-[95%]" />
                                <h1 className="underline">{ele.title}</h1>
                            </div>
                        ))
                    }
                </div>
                }
            </div>
            <div className="bg-[rgb(245,234,220)] pb-8">
                <h1 className="font-bold text-2xl pt-6 pb-2 px-10">That Autumn Feeling</h1>
                <div className="flex justify-center">
                    <div className="flex w-[95%]">
                        {
                            autumn.map((ele, index) => (
                                <div key={index} className="text-center">
                                    <img src={ele.img} alt="" className="w-[96%]" />
                                    <h1 className="text-[18px] py-2">{ele.title}</h1>
                                    <h2 className="font-bold underline">{ele.lable}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="w-[95%] py-4 my-10 m-auto text-center space-y-4 bg-blue-50">
                <h1 className="font-bold  text-2xl">Get 10x Points on 10/8 & 10/9*</h1>
                <p className="px-28 text-lg ">Already a Zappos VIP with a linked Prime account?
                    Shop & earn now! Not a VIP or have a linked Prime account? Join & link
                    to get in on the points! *Points will be added to your account within 5-7 days post-purchase.
                </p>
                <div className="w-[15%] m-auto flex justify-between font-bold text-[17px] underline">
                    <h1>Join VIP</h1>
                    <h1>Link Your Prime</h1>
                </div>
            </div>

            <div className="w-[95%] m-auto flex justify-between">
                <div className="flex justify-center items-center">
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold">On : Work Out  Anywhere</h1>
                        <p className=" text-xl">Train indoors or run  outside  in ultra-comfortable sneakers.</p>
                        <h1 className="text-lg underline font-semibold">Shop On</h1>
                    </div>
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.07/ON-OCTOBER-AOE-960x500._FMwebp_.jpg" alt="" />
                </div>
            </div>

            <div className="w-[95%] m-auto flex justify-between space-x-4 my-6">
                <div>
                    <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/NEW-ARRIVALS-FEED-658x916_13._FMwebp_.jpg" alt="" />
                </div>
                {products.map((product) => (
                    <div>
                        <ProductCard key={product.id} product={product} />
                    </div>
                ))}
            </div>
            <div className="bg-[rgb(245,234,220)] pb-8">
                <h1 className="font-bold text-2xl pt-6 pb-2 px-10">Want inspiration? Visit The Style Room for styling tips and fashion trends.</h1>
                <div className="flex justify-center">
                    <div className="flex w-[95%]">
                        {
                            inspiration.map((ele, index) => (
                                <div key={index} className="text-center">
                                    <img src={ele.img} alt="" className="w-[96%]" />
                                    <h1 className="text-[18px] py-2">{ele.title}</h1>
                                    <h2 className="font-bold underline">{ele.lable}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="relative w-[95%] m-auto my-6 ">
                <h1 className="text-2xl font-bold mx-4 my-4">Zappos 25th Birthday Exclusives</h1>
                <button
                    onClick={scrollLeft}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 "
                >
                    &#9664;
                </button>

                <div
                    ref={scrollRef}
                    className="flex justify-between space-x-4 overflow-x-scroll no-scrollbar scroll-smooth"
                >
                    <div>
                        <img
                            src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/NEW-ARRIVALS-FEED-658x916_13._FMwebp_.jpg"
                            alt=""
                            className="w-70"
                        />
                    </div>
                    {exclusive.map((product) => (
                        <div key={product.id} className="flex-shrink-0 w-64">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                >
                    &#9654;
                </button>
            </div>

            <div>
                <h1 className="text-2xl font-bold mx-10 my-4">Shop KUT from the Kloth</h1>
            <div className="w-[95%] m-auto flex justify-between space-x-4 my-6">
                <div>
                    <img src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.07/KUT-OCTOBER-NEW-ARRIVALS-658x916._FMwebp_.jpg" alt="" />
                </div>
                {shopKut.map((product) => (
                    <div>
                        <ProductCard key={product.id} product={product} />
                    </div>
                ))}
            </div>

      <section className="w-[95%] m-auto py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-2">Ways to Shop & Save!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-2-VIP-896x300._FMwebp_.png" alt="" />
            <img src="https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-1-PRIME-896x300._FMwebp_.png" alt="" />
            <img src="https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-4-APP-COUPON-896x300._FMwebp_.png" alt="" />
          </div>
        </div>
      </section>

    </div>
        </div>
        <Footer/>
    </>
}
