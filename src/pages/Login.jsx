import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {

    }

    const handleLoginWithGoogle = () => {

    }

    return (
        <div className="flex items-center justify-center my-10">

            {/* <Helmet>
                <title>Login || Career Counseling</title>
            </Helmet> */}

            <div className="bg-white shadow-2xl rounded-lg w-full max-w-md px-8 py-10 border">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Welcome Back</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control">
                        <label className="label text-lg font-medium text-gray-700">Email address</label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-300 transition" required />
                    </div>
                    <div className="form-control">
                        <label className="label text-lg font-medium text-gray-700">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-300 transition" required />
                    </div>
                    <p className="text-sm text-right"><Link className="text-indigo-600 hover:underline"> Forgot your password? </Link></p>
                    <button className="btn w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"> Login </button>
                </form>
                <div className="mt-6">
                    <button onClick={handleLoginWithGoogle} className="w-full flex items-center justify-center py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition"><FaGoogle /> <span className='ml-2'>Login with Google</span></button>
                </div>
                <p className="mt-4 text-center text-base text-gray-600">Don’t have an account?<Link to="/register" className="text-teal-600 font-medium hover:underline"> Register now</Link></p>
            </div>
        </div>
    );
};

export default Login;