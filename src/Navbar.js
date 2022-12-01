
// import Bag from './bag.jpg';
import './App.css';
// import smartwatch from "./Images/smartwatch.jpg";
// import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'

// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const category = [
  // { name: 'Shoes', href: '#', current: true, img: {smartwatch} },
  { name: 'Bags', href: '#', current: false ,img: "./Images/earbud.png"},
  { name: 'Shoes', href: '#', current: true, img: "./Images/smartwatch.jpg" },
  { name: 'Tops', href: '#', current: false,img: "./Images/smartwatch1.jpg" },
  
  { name: 'Jewelry', href: '#', current: false,img: "./Images/iphone11.jpg" },
  { name: 'Shoes', href: '#', current: true, img: "./Images/smartwatch.jpg" },
  { name: 'Tops', href: '#', current: false,img: "./Images/smartwatch1.jpg" },


]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="nav-color1">
      {({ open }) => (
        <>
          {/* <div className="mx-4 max-w-7xl px-2 content-evenly sm:px-6 lg:px-8"> */}
            {/* <div className="relative flex h-48 items-center justify-between ">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               */}
              
              <div className=" my-2  px-2 md:px-8 lg:px-8 ">
               <div className="flex flex-wrap -mx-1 ">

                  {/* <div className="flex space-x-4 bg-gray-800 p-2 mx-2"> */}
                    {category.map((item) => (
                              <div class="my-1 w-full sm:w-1/2 md:w-1/4 lg:my-4 lg:w-1/6  xl:w-1/7  ">
                              <div className='flex-col max-w-sm justify-evenly mx-4 card p-1  rounded overflow-hidden  items-center'>
                              <img src={item.img} className=" h-28 w-full rounded-lg shadow-lg object-center" alt={item.name} />
                              <div className=' text-gray-800 text-xl text-center font-semibold'> {item.name}</div>
                      
                      </div>
                      </div>
                    ))}
                  </div>
                </div>
             {/* </div>  */}
             
            {/* </div> */}
          {/* </div> */}

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {category.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  )
}
