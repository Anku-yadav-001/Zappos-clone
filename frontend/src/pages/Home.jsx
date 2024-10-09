import womans from "../assets/womans.gif"
import { tranding, autumn } from "../Data/data.js"

export function Home() {


    return <>
        <div className="">
            <div className="w-[94%] py-4 m-auto">
                <img src={womans} alt="" />
                <div className="text-center p-4 bg-[rgb(245,234,220)]">
                    <h1 className="font-semibold text-3xl">Head-to-Toe Fall</h1>
                    <h2 className="font-semibold text-lg py-2 underline">Shop Women's Fall Favoriutes</h2>
                </div>

                <h1 className="font-bold text-3xl pt-6 pb-2">Trending Now</h1>
                <div className="flex">
                    {
                        tranding.map((ele, index) => (
                            <div key={index} className="text-center font-semibold text-[18px] space-y-2">
                                <img src={ele.img} alt="" className="w-[95%]" />
                                <h1 className="underline">{ele.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bg-[rgb(245,234,220)] pb-8">
                <h1 className="font-bold text-2xl pt-6 pb-2 px-10">That Autumn Feeling</h1>
                <div className="flex justify-center">
                <div className="flex w-[95%]">
                    {
                        autumn.map((ele, index) => (
                            <div key={index} className="text-center">
                                <img src={ele.img} alt="" className="w-[96%]"/>
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

        </div>
    </>
}