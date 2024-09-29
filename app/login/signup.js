// app/pages/signup.js

import { useState } from 'react';

export default function SignUpPage() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding field in formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // For now, we'll just log the form data to the console
    console.log('Form submitted:', formData);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />

        {/* Email Field */}
        <div>
          <label>
            Email:{' '}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />

        {/* Password Field */}
        <div>
          <label>
            Password:{' '}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />

        {/* Submit Button */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
