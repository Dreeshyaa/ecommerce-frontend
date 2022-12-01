import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdminNav from './components/admin-nav';
import Home from './admin/User/Home';
import Create from './admin/User/Create';
import Edit from './admin/User/Edit';
import View from './admin/User/View';
import Footer from './components/footer';
// import Index from "./index";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function AdminIndex(){
const root = ReactDOM.createRoot(document.getElementById('root'));
// let read= ReactDOM.createRoot(document.getElementById('read'));
root.render(
  <BrowserRouter>
  
  
    <div class="flex flex-col h-screen">
    <AdminNav/>
    
    <div className='flex-grow'>
      {/* <App></App> */}
     {/* <Carousel/> */}
      </div>
      
      <Routes>
          <Route path="/dashboard" element={<>
        </>}>
          
          </Route>
          <Route path="/" exact element={<></>}>            
            </Route>
            <Route path="/home" element={<Home/>}>
            
          </Route>
          <Route path="/create" element={<Create/>}>
            
          </Route>
          <Route path="/edit/:id" element={<Edit/>}>
            
            </Route>
            <Route path="/view/:id" element={<View/>}>
            
            </Route>
          </Routes>
      {/* <Card></Card>
      <Cardd></Cardd> */}
     
    <Footer></Footer>
    
   
  </div>

  </BrowserRouter>
   
 
);
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('read'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
}