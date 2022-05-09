import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleToSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                navigate('/orders');
            })
    }

    return (
        <>
            <h1 className='text-center my-3'>Login</h1>
            <form onSubmit={handleToSubmit} className='mx-auto py-2' style={{ width: '500px' }}>
                <div className="mb-3">
                    <input name='email' placeholder='Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input name='password' placeholder='Password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary w-50 mx-auto">Submit</button>
            </form>
        </>
    );
};

export default Login;