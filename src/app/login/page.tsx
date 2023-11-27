// pages/login.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { setCookie } from 'nookies';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const YOUR_BACKEND_API_URL = 'http://127.0.0.1:5000';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${YOUR_BACKEND_API_URL}/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const { token, username: loggedInUsername } = response.data;

        // Set token and username in cookie
        setCookie(null, 'token', token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });

        setCookie(null, 'username', loggedInUsername, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });

        // Redirect to home page or any other page after successful login
        router.push('/');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-sm font-semibold">Username:</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded px-3 py-2 mt-1"
            />
          </label>
          <label className="flex flex-col relative">
            <span className="text-sm font-semibold">Password:</span>
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-3 py-2 mt-1"
              
            />
           
          </label>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
