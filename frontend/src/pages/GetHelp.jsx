import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function GetHelp() {
    const infoItems = [
        {
            title: 'TRACK AN ORDER',
            image: 'https://m.media-amazon.com/images/G/01/2023/customerservicepage/Check-Order._SX1024_FMwebp_.png',
            description: 'We’re excited that you’re excited about your order! All tracking numbers and updates are sent to the email address on your Zappos.com account. Once signed in, you can also view your order status under the “My Account” dropdown menu by clicking the “View Orders / Return Items” link, then selecting the “Show More” button next to your order.',
            linkText: 'View Order Status',
            linkUrl: '#',
        },
        {
            title: 'CHECK A RETURN',
            image: 'https://m.media-amazon.com/images/G/01/2023/customerservicepage/Refund._SX1024_FMwebp_.png',
            description: 'You sent back your order—now what? It can take up to 30 days for your return to be inspected and processed for a refund once it is received at our fulfillment center. Once signed in, you can also view your return & refund status under the "My Account" dropdown menu by clicking the "View Orders / Return Items" link, then selecting the "Show More" button next to your order.',
            linkText: 'View Return Status',
            linkUrl: '#',
        },
        {
            title: 'FIND SOMETHING ELSE',
            image: 'https://m.media-amazon.com/images/G/01/2023/customerservicepage/FAQ._SX1024_FMwebp_.png',
            description: 'Hey, some things need more explanation. We got you! If our most popular inquiries aren’t applicable to you, peruse our FAQs for more specific questions and answers.',
            linkText: 'Explore Zappos FAQs',
            linkUrl: '#',
        },
        {
            title: 'TALK WITH US',
            image: 'https://m.media-amazon.com/images/G/01/2023/customerservicepage/Contact._SX1024_FMwebp_.png',
            description: 'If you can\'t find what you need, our Customer Loyalty Team is happy to assist. Call us 24/7 at 1-800-927-7671 or visit our Contact Information page for additional options.',
            linkText: 'Contact Zappos',
            linkUrl: '#',
        },
    ];

    return (
        <>
            <Navbar />
            <div className="w-[95%] m-auto">
                <h1 className="text-2xl font-semibold my-4">Get Help: Zappos Customer Service</h1>
                <img src="https://m.media-amazon.com/images/G/01/Zappos/G4G-HERO-1440x250._FMwebp_.jpg" alt="" className="w-full h-auto" />

                <div className="flex flex-col md:flex-row items-center justify-between my-8">
                    <div className="md:w-[40%] flex flex-col justify-center items-start text-left space-y-4 bg-gray-200 p-4">
                        <h2 className="text-2xl font-semibold">Return an Order</h2>
                        <p className="text-gray-700">Some things don’t work out. No biggie!</p>
                        <p className="text-gray-700">
                            Sign in to your Zappos account. Navigate to the “My Account” dropdown menu and click the “View Orders / Return Items” link. Select “Return Item(s), followed by the item(s) you wish to return, and the label & carrier you prefer. Repackage the order and voilà!! You’re ready to print your label or present your QR code for drop-off.
                        </p>
                        <a href="#" className="text-black font-semibold underline hover:text-blue-800">
                            Sign In to Start a Return
                        </a>
                    </div>

                    <div className="md:w-[50%] flex justify-center mt-4 md:mt-0">
                        <img
                            src="https://m.media-amazon.com/images/G/01/zappos/landing/customer-service/return-label._SX1024_FMwebp_.png"
                            alt="Print your return label"
                            className="w-full h-auto" // Ensure the image is responsive
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between my-8">
                    <div className="md:w-[50%] flex justify-center mt-4 md:mt-0">
                        <img
                            src="https://m.media-amazon.com/images/G/01/zappos/landing/customer-service/Order._SX1024_FMwebp_.png"
                            alt="Place an order"
                            className="w-full h-auto" // Ensure the image is responsive
                        />
                    </div>
                    <div className="md:w-[40%] flex flex-col justify-center items-start text-left space-y-4 bg-gray-200 p-4">
                        <h2 className="text-2xl font-semibold">Place an Order</h2>
                        <p className="text-gray-700">
                            Getting the things you love is easy! Just add the item(s) you would like to purchase to your cart, then select “Proceed to Checkout.” You must sign in or create your Zappos.com account. Then, you can add your payment method and complete your order by clicking the “Place Your Order” button on the checkout screen. Yay!
                        </p>
                        <a href="#" className="text-black font-semibold underline hover:text-blue-800">
                            Start Shopping Now
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between my-8">
                    <div className="md:w-[40%] flex flex-col justify-center items-start text-left space-y-4 bg-gray-200 p-4">
                        <h2 className="text-2xl font-semibold">Exchange an Order</h2>
                        <p className="text-gray-700">
                            If your account is eligible for a self-service exchange, you will see the option next to your order info. If this option is missing, don’t stress! Simply contact <a href="" className="text-blue-600 underline">customer service</a> for assistance.
                        </p>
                        <a href="#" className="text-black font-semibold underline hover:text-blue-800">
                            Exchange an Order
                        </a>
                    </div>

                    <div className="md:w-[50%] flex justify-center mt-4 md:mt-0">
                        <img
                            src="https://m.media-amazon.com/images/G/01/zappos/landing/customer-service/Exchange._SX1024_FMwebp_.png"
                            alt="Exchange an order"
                            className="w-full h-auto" // Ensure the image is responsive
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 mx-4">
                    {infoItems.map((item, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="mx-auto mb-4 w-72 h-72 object-cover"
                            />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="mt-4 text-gray-700">{item.description}</p>
                            <a
                                href={item.linkUrl}
                                className="mt-4 inline-block text-md font-semibold underline hover:text-blue-800"
                            >
                                {item.linkText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
