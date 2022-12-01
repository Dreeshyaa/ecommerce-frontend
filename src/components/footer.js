import { Link } from "react-router-dom";

const navigation = [
    { name: 'App', to: '/app', current: true },
    { name: 'Card', to: '/card', current: false },
    { name: 'Carousel', to: '/Carousel', current: false },
    { name: 'Category', to: '/Category', current: false },
    { name: 'Contact', to: '/Contact', current: false },
    { name: 'Home', to: '/home', current: true },
    { name: 'Create', to: '/create', current: true },
    { name: 'Dashbord', to: '/Dashbord', current: true },
    // { name: 'Cart', to: '/Cart', current: false },
  ]

function Footer() {
  return (
    <div className="mt-8 bg-gray-800">
    <div className="max-w-2xl mx-auto text-white py-10">
    <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our E-shop app </h3>
            <p> Shop with Us. All day, every day. </p>
            <div className="flex justify-center my-10">
                <div className="flex items-center   hover:font-medium border rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Play store icon" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border hover:font-medium  rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png"  alt="Apple store icon" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
            <div className="order-1 md:order-2">
                <span className="px-2 hover:text-white">About us</span>
                <span className="px-2 hover:text-white border-l"><Link to="/contact">Contact us</Link></span>
                <span className="px-2 hover:text-white border-l">Privacy Policy</span>
            </div>
        </div>
        </div>
        </div>
   
);
}

export default Footer;
