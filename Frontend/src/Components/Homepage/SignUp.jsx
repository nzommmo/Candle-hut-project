import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (password1 !== password2) {
            setError({ password2: ['Passwords do not match.'] });
            return;
        }
        try {
            const data = await signUpUser(username, email, password1, password2);
            console.log('Sign up successful:', data);
            setSuccessMessage('Sign up successful! You can now log in.');
            setError({});  // Clear errors
            setUsername('');
            setEmail('');
            setPassword1('');
            setPassword2('');
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError({ general: ['Sign up failed. Please try again.'] });
            }
        }
    };

    const signUpUser = async (username, email, password1, password2) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/registration/', {
                username,
                email,
                password1,
                password2,
            });
            return response.data;
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    };

    return (
        <form onSubmit={handleSignUp}>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

            {error.general && error.general.map((msg, index) => (
                <p key={index} className="text-red-500 mb-4">{msg}</p>
            ))}
            <div className="mb-4">
                <label className="block text-red font-bold mb-2">Username</label>
                <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {error.username && error.username.map((msg, index) => (
                    <p key={index} className="text-red-500 mb-2">{msg}</p>
                ))}
            </div>
            <div className="mb-4">
                <label className="block text-red font-bold mb-2">Email</label>
                <input 
                    type="email" 
                    className="w-full px-3 py-2 border rounded" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {error.email && error.email.map((msg, index) => (
                    <p key={index} className="text-red-500 mb-2">{msg}</p>
                ))}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input 
                    type="password" 
                    className="w-full px-3 py-2 border rounded" 
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />
                {error.password1 && error.password1.map((msg, index) => (
                    <p key={index} className="text-red-500 mb-2">{msg}</p>
                ))}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Confirm Password</label>
                <input 
                    type="password" 
                    className="w-full px-3 py-2 border rounded" 
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                {error.password2 && error.password2.map((msg, index) => (
                    <p key={index} className="text-red-500 mb-2">{msg}</p>
                ))}
            </div>
            <button type="submit" className="bg-customGreen text-white px-4 py-2 rounded">Sign Up</button>
        </form>
    );
};

export default SignUp;
