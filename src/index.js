import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Nav from './components/Nav';
// import Navbar from './Navbar';
// import Card from './Card';
// import Category from './Category';
// import Carousel from './Carousel';
// import Login from './admin/auth/login';
// import Login1 from './admin/auth/login1';
// import Home from './admin/User/Home';
// import Create from './admin/User/Create';
// import Edit from './admin/User/Edit';
// import View from './admin/User/View';
// import AdminIndex from './admin-index';
// import Footer from './components/footer';
// import { AuthProvider } from './admin/context/AuthProvider';
import { store } from './app/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Contact from './components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let read= ReactDOM.createRoot(document.getElementById('read'));
root.render(
<>
<Provider store={store}>
    <App />
  </Provider>,
</>
   
 
);
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('read'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
