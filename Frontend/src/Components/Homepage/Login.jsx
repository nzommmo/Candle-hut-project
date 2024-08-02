import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { X } from 'lucide-react';
import SignUp from './SignUp';

const Login = ({ isOpen, onClose }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(username, email, password);
            console.log('Login successful:', response);
            setSuccess('Login successful!'); 
            setError(''); 
            navigate('/products'); // Redirect to the products page
        } catch (error) {
            console.error('Error during login:', error);
            if (error.response && error.response.data) {
                if (error.response.data.non_field_errors) {
                    setError(error.response.data.non_field_errors.join(' '));
                } else {
                    setError('Login failed. Please check your credentials and try again.');
                }
            } else if (error.request) {
                setError('No response received from the server.');
            } else {
                setError(`An unexpected error occurred: ${error.message}`);
            }
            setSuccess(''); 
        }
    };

    const loginUser = async (username, email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
                username,
                email,
                password,
            });
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error; // Ensure errors are propagated
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <div className="bg-black p-6 rounded shadow-lg max-w-sm w-full">
                <div className='flex justify-end'>
                    <button onClick={onClose} className="mt-4 text-blue-500">
                        <X />
                    </button>
                </div>
                {showSignUp ? (
                    <>
                        <h2 className="text-xl mb-4 text-center mb-9">Sign Up</h2>
                        <SignUp />
                        <div className='flex flex-col items-center justify-center my-10'>
                            <p>Already have an account?</p>
                            <button 
                                onClick={() => setShowSignUp(false)} 
                                className="bg-blue-500 text-white px-4 py-0.5 rounded my-2"
                            >
                                Login
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl mb-4 text-center mb-9">Login</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        {success && <p className="text-green-500 mb-4">{success}</p>}
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Username</label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border rounded" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-3 py-2 border rounded" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Password</label>
                                <input 
                                    type="password" 
                                    className="w-full px-3 py-2 border rounded" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-customGreen text-white px-4 py-2 rounded">Login</button>
                        </form>
                        <div className='flex flex-col items-center justify-center my-10'>
                            <p>Don't have an account?</p>
                            <button 
                                onClick={() => setShowSignUp(true)} 
                                className="bg-blue-500 text-white px-4 py-0.5 rounded my-2"
                            >
                                Sign Up
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
