import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/LocalAtorageService';

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc: data.get('tc'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {

        const res = await registerUser(actualData)
        console.log(res)
        if (res.data.status === "success") {
          // Store Token Code here
          storeToken(res.data.token)
          navigate('/dashboard')
        }
        if (res.data.status === "failed") {
          setError({ status: true, msg: res.data.message, type: 'error' })
        }
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
        <div className='max-w-md shadow-2xl hover:shadow-green-600 rounded-xl m-6 p-4'>
        <div className="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7">
                    <div className="relative">
							<input autocomplete="off" 
							id="name" 
              name="name"
							type="text" 
                            required
							// onChange={e => setUserName(e.target.value)}
							// value={username}
							className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name " />
							<label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
						</div>
						<div className="relative pt-4">
							<input autocomplete="off" 
							id="email"
                            name="email" 
							type="text"
                            required 
							// onChange={e => setUser(e.target.value)}
							// value={useremail}
							className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative pt-4">
							<input 
							id="password" 
							name="password" 
							type="password"
                            required 
							// onChange={e => setPwd(e.target.value)}
							// value={password}
							className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
      <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
      <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </div>
      </div>
    </Box>
  </>;
};

export default Registration;