import './App.css';

import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

function classes(...classes){
    return classes.filter(Boolean).join('')
}
function Card() {
    const Electronis=[
        {name:'Iphone11pro', price: "Rs 112000",href:"#",img: "./Images/iphone11.jpg" },
        {name:'redmi11pro', price: "Rs 25000",href:"#",img: "./Images/redmi10pro.jpg" },
        {name:'Oppo F19', price: "Rs 49999",href:"#",img: "./Images/oppoF19.jpg" },
        {name:'Gravity Beast', price: "Rs 2999",href:"#" , img: "./Images/Gravitybeast.jpg"},
        {name:'Iphone11pro', price: "Rs 112000",href:"#",img: "./Images/iphone11.jpg" },
        {name:'redmi11pro', price: "Rs 25000",href:"#",img: "./Images/redmi10pro.jpg" },
      

        // {name:'Iphone11pro', price: "Rs 5000",href:"#",src: "./Images/iphone11.jpg" }
        // {name:'oppo', price: "Rs 5000",href:"#",img:"{require(images/oppoF19.jpg)}" }
    ]

  return (

    <div className="w-full px-4 pt-16 flex flex-row">
        <div className='flex-col justify-around m-4  p-2 object-center'>
            <div  className=" h-32 w-full mt-8 m-1 text-center text-gray-800 text-xl font-semibold">Best Electronis </div>
            <Disclosure as="card" className="bg-green-800" >
                {({ open }) => (
            <>
            <Disclosure.Button className="px-4 py-2 text-sm text-blue-100 nav-color3 hover:font-semibold rounded shadow">View All</Disclosure.Button>
            </>
          )}
            </Disclosure>
        </div>
       
        {/* card */}
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {Electronis.map((item)=>(
            <>
        <div class="my-1 w-full sm:w1/2 md:w-1/3 lg:my-4 lg:w-1/4  xl:w-1/5 2xl:W-1/6">
        <div className='flex-col max-w-md justify-evenly m-4 bg-gray-100 p-2  rounded overflow-hidden shadow-lg items-center'>
        <img src={item.img} className=" h-32 w-full rounded-lg object-center" alt="Bag" />
        <div className='m-1 text-gray-800 text-xl font-semibold'> {item.name}</div>
        <div className='m-1 text-red-800 text-xl font-semibold hover:text-red-600 hover:font-bold'>
            <span className='line-through text-gray-600 text-lg font-medium mr-2'> Rs 5999</span>{item.price}</div>
        <button className="px-2 py-1 text-sm text-blue-100 nav-color3 items-center hover:font-semibold hover:text-white rounded shadow">
                    <a href='{}'>  Read more</a>
                            </button>
            <button className="px-2 mx-2 py-1  text-sm text-blue-100 nav-color3 items-center hover:font-semibold hover:text-white
                             rounded shadow">
                    <Link to='/cart'> Add to Cart</Link>
                            </button>
            {/* {item.name} */}
        </div>
        <div>
        </div>
        </div>

        </>
       ))}
       </div>
        </div>
        </div>

   
  );
}

export default Card;
