"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateAccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Add your create account logic here
    alert(`Account created for ${email}`);
    router.push('/login'); // Redirect back to the login page after account creation
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleCreateAccount}>
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button type="submit" className="bg-green-500 text-white font-semibold px-4 py-2 w-full rounded hover:bg-green-600 transition duration-300">
          Create Account
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a className="text-green-500 hover:underline" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
