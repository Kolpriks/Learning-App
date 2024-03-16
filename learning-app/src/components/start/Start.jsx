import React from 'react'
import styles from './Start.module.css'
import { Link } from 'react-router-dom';
const logo = '/generated-logo-no_backgroud.png';
const personProf = '/person-prof.png';


const Start = () => {
	return (
		<main className={styles.homepage}> 
			<div className={styles.header}>
				<div className={styles.logo}>
					<img src={logo} alt="Logo"/>
					<h1>ProfessionSkill<br/> Academy</h1>
				</div>
				<div>
					<h2>Язык: Русский</h2>
				</div>
			</div>

			<div className={styles.middleText}>
				<div className={styles.twoText}>
					<h1>Добро пожаловать в <span style={{ color: '#FFC700', fontSize: '4rem', fontWeight: '500' }}>ProfessionSkill Academy</span></h1>
					<h1>Здесь ты сможешь быстро познакомиться с основами интересующей тебя профессией!</h1>
				</div>
				<img src={personProf} alt="main picture of profession" className={styles.mainImage}/>
			</div>

			<div className={styles.buttons}>
				<Link to="/registration">
					<button className={styles.registrationButton}>Зарегистрироваться</button>
				</Link>
				<Link to="/login">
					<button className={styles.loginButton}>Войти</button>
				</Link>
			</div>
		</main>
	)
}

export default Start
