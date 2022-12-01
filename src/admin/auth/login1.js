import React  from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
// import PropTypes from 'prop-types';
import axios from '../../http';
const LOGIN_URL = '/auth';

const Login1 = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

	const [username, setUserName] = useState('');
    const [useremail, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username,useremail, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, useremail, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            setAuth({username, useremail, password,  accessToken });
			setUserName('');
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
  return (
    // <!-- component -->
    <>
	{ success? (
		// navigate('/dashboard')
		<section>
			<h1>
				you are logged in
			</h1>
		</section>
	):(
<div className="">
    <div className="lg:flex min-h-screen max-h-full flex flex-wrap  text-gray-900 w-full  bg-gray-500 bg-no-repeat bg-cover
	relative items-center "  style={{
            backgroundImage: `url('../carousel-img/img2.jpg')`}}> 
			 <div className="lg:flex lg:w-1/2 sm:w-full   items-center "  >
          {/* <img className=' w-full bg-no-repeat bg-cover' src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"></img> */}
          {/* <div className="absolute bg-black opacity-25 inset-0 z-0 lg:flex w-1/2 h-full hidden  items-center"></div> */}
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>
                <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                    <span>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </span>
                    <span>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </span>
                    <span>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </span>
                </div>
			</div>

		<div className='relative flex py-3 sm:max-w-xl sm:mx-auto'>
          <div className="  ">
		<div
			className="absolute inset-0  shadow-lg transform sm:p-14 -skew-y-6 sm:skew-y-0
             sm:-rotate-6 sm:rounded-3xl opacity-75" style={{background:"linear-gradient(to right, #66F5A1, #054E3C)"}}>
		</div>
		<div className="relative px-4 pt-4 bg-white shadow-lg sm:rounded-3xl sm:p-14 opacity-80">
			<div className="max-w-lg mx-auto">
				<div >
					<h1 className="text-2xl font-semibold">SignIn with us Ecommerce</h1>
				</div>
				<p ref={errRef} className={errMsg? "errmsg text-red-500 font-semibold" : "offscreen"} aria-live="assertive">{errMsg}</p>

				<div className="divide-y divide-gray-200">
				<form onSubmit={handleSubmit}>
					<div className="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7">
					<div className="relative">
							<input autocomplete="off" 
							id="name" 
							ref={userRef} 
							type="text" 
							onChange={e => setUserName(e.target.value)}
							value={username}
							className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name " />
							<label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
						</div>
						<div className="relative">
							<input autocomplete="off" 
							id="email" 
							ref={userRef} 
							type="text" 
							onChange={e => setUser(e.target.value)}
							value={useremail}
							className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input 
							id="password" 
							name="password" 
							type="password" 
							onChange={e => setPwd(e.target.value)}
							value={password}
							className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className=" text-gray-900 hover:underline relative">
                            <a href="#">Forgot your password?</a>
                        </div>
						<div className="relative">
							<button 
							className="nav-color3 text-white rounded-md px-4 py-1 hover:text-white">Submit</button>
						</div>
						<div className='relative'>
						<p className="text-gray-900 text-center">
                        or signin with
                    	</p>
						<div className="pt-2  ">
						<div className='text-lg space-x-2 text-center'>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold  border-2 border-gray-900 hover:p-2">f</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold border-2 border-gray-900">G+</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold  border-2 border-gray-900">in</span>
						</div>
                        <div className=" text-blue-600 text-sm hover:underline text-center mt-1 relative">
                            <a href="/register">Want to Register?</a>
                        </div>
                    </div>
					
                    
						</div>
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	</div>
    </div>
</div>
)}
 {/* Example */}


</>
  )
}
// Login.propTypes = {
// 	setToken: PropTypes.func.isRequired
//   };

export default Login1