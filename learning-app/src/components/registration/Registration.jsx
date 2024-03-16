import React, { useState } from 'react';
import styles from './Registration.module.css'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:7878', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.ok) {
        setSuccessMessage('Registration successful');
        setEmail('');
        setName('');
        setPassword('');
        setConfirmPassword('');
        setError('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to register');
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.registration}>
      <form onSubmit={handleSubmit} className={styles.formRegistration}>
        <div>
          <input type="email" placeholder='youremail@email.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>

          <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>

          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>

          <input type="password" placeholder='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
