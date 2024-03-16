import React, { useState } from 'react';
import styles from './Home.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
const logo = '/generated-logo-no_backgroud.png';

const Home = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

		// const toggleMenu = () => {
		// 		setIsMenuOpen(!isMenuOpen);
		// };

    return (
			<div className={styles.home}>
				<div className={styles.head}>
					<div className={styles.logo}>
						<img src={logo} alt='logo'/>
						<h1>ProfessionSkill<br/> Academy</h1>
					</div>
					
				</div>
			</div>
		);
};

export default Home;





{/* <div className={styles.dropDownMenu}>
<button className={styles.burgerMenu} onClick={toggleMenu}>
	<RxHamburgerMenu />
</button>
{isMenuOpen && (
	<div className={styles.menu}>
		<ul>
			<li>Frontend-Разработчик</li>
			<li>Backend-Разработчик</li>
			<li>Дизайнер</li>
			<li>Монтажер</li>
		</ul>
	</div>
)}
</div>

<div className={styles.logo}>
<img src={logo} alt="Logo"/>
<h1>ProfessionSkill<br/> Academy</h1>
</div> */}
