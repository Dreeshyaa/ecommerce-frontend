import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import http from "../../http";
import './../../App.css';
export default function Home(){
    const [users, setUsers] =useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers=()=>{
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }
    
    const deleteUser =(id)=>{
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }

    return(
    <div>
        <h1 className="text-center font-semibold">User listing 
        </h1>
        <table  className="table-auto border-2 m-4">
            <thead  className="m-2 nav-color33 text-semibold ">
                <tr>
                <th  className=" p-4    ">SNo</th>
                <th  className=" p-4    ">Name</th>
                <th  className=" p-4    ">Email</th>
                <th  className=" p-4    ">Action</th>
                </tr>
            </thead>
            <tbody  className="m-2">
                {users.map((user,index)=>
                <tr key={user.id}>
                    <td  className="p-4">{++index}</td>
                    <td  className="p-4">{user.name}</td>
                    <td  className="p-4">{user.email}</td>
                    <td  className="p-4">
                    <Link to={{pathname:"/edit/"+user.id}} className="mt-4 py-3 px-5 text-sm font-medium text-center hover:text-white rounded-lg nav-color3 sm:w-fit
                 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 
                 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit</Link>&nbsp;
                    
                    <Link to={{pathname:"/view/"+user.id}} className="mt-4 py-3 px-5 text-sm font-medium text-center hover:text-white rounded-lg nav-color3 sm:w-fit
                 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 
                 dark:hover:bg-primary-700 dark:focus:ring-primary-800">View</Link>&nbsp;
                    
                    
                        <button type="button" onClick={()=>{deleteUser(user.id)}}
                        className=" py-3 px-5 text-sm font-medium text-center hover:text-white rounded-lg nav-color3 sm:w-fit
                        hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 
                        dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Delete
                        </button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}
