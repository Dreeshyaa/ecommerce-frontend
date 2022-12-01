import './App.css';

import Nav from './components/Nav';
import Navbar from './Navbar';
import Card from './Card';
import Category from './Category';
import Contact from './components/contact';
import Carousel from './Carousel';
import AdminIndex from './admin-index';
import Login from './admin/auth/login';
import Login1 from './admin/auth/login1';
import Register from './admin/auth/Register';
import Home from './admin/User/Home';
import Create from './admin/User/Create';
import Edit from './admin/User/Edit';
import View from './admin/User/View';
import { AuthProvider } from './admin/context/AuthProvider';
import Footer from './components/footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
     
    <Nav></Nav>
    <Navbar></Navbar>
    <Routes> 
          <Route path="/" exact element={<></>}></Route>

          <Route path="/card" element={<><Card/></>}></Route>

          <Route path="/contact" element={<Contact/>}></Route>

          <Route path="/category" element={<Category>
            {/* <ImageSlider slides={SliderData} /> */}
          </Category>}></Route>

          <Route path="/carousel" element={<Carousel/>}></Route>

          <Route path="/home" element={<Home/>}></Route>

          <Route path="/create" element={<Create/>}></Route>

          <Route path="/register" element={<Register/>}></Route>

          <Route path="/login" element={
          <>
          {/* <Login/> */}
          <Login1/>
            </>}></Route>

            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="/view/:id" element={<View/>}>
            </Route>
            <Route path="/dashbord" element={
            <AuthProvider>
            <AdminIndex/>
            </AuthProvider>
            }>
            </Route>
            
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     
    </>
  );
}

export default App;
