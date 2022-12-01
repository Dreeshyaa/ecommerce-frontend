import { useState } from "react";
import React, { Component} from 'react';
import { useNavigate } from "react-router-dom";
import http from "../../http";


 function Create(){
    const navigate = useNavigate();
    const [ inputs, setInputs  ] = useState({});
    const handleChange=(event)=> {
        const name= event.target.name;
        const value= event.target.value;
      
       setInputs(values =>({...values,[name]:value}))

      }
 
     const submitForm=()=> {
        http.post('/users', inputs).then((res)=>{
          navigate('/home');
        })
      }
 
 
    return(
        <div>
        
        <div className="flex flex-wrap  bg-white justify-center ">
              <div className="w-full sm:w-1/2 md:w-1/2">
            <div className=" mt-4 ml-12 max-w-2xl shadow-lg">
                <h2 className="text-center font-semibold">Create Page</h2>
                <div className="p-4">
                <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
               dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
               name="name" value={inputs.name || ""} onChange={handleChange} required/>
                </div>
                <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
               dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              name="email" value={inputs.email || ""} onChange={handleChange}  required/>
                </div>
                <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
              <input type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
               dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
               name="password" value={inputs.password || ""} onChange={handleChange} required/>
                </div>
                
                <button type="submit" onClick={submitForm} className="mt-4 py-3 px-5 text-sm font-medium text-center hover:text-white rounded-lg nav-color3 sm:w-fit
                 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 
                 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                </div>
            </div>
              </div>
            
            </div>
        </div>
    )
}

export default Create;