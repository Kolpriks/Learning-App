import React, { useState } from 'react';
import styles from './Login.module.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="email"
					value={formData.field1}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="password"
					value={formData.field2}
					onChange={handleChange}
				/>
				<button type="submit">Отправить</button>
			</form>	
		</div>
    
  );
}

export default Login;
