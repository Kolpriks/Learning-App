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
			const response = await fetch('http://localhost:7878', { // измените URL
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			// Вам может понадобиться обработать ответ от сервера
		} catch (error) {
			console.error('Ошибка:', error);
		}
	};
	

  return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit} className={styles.formLogin}>
				<input
					type="text"
					name="email"
					value={formData.field1}
					onChange={handleChange}
					placeholder='ivanivanov@email.da'
				/>
				<input
					type="text"
					name="password"
					value={formData.field2}
					onChange={handleChange}
					placeholder='password'
				/>
				<button type="submit">Отправить</button>
			</form>	
		</div>
    
  );
}

export default Login;
