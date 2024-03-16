import React, { useState, useRef, useEffect } from 'react';
import styles from './Home.module.css';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const logo = '/generated-logo-no_backgroud.png';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = 'hidden';
            setShowCloseButton(true);
        } else {
            document.body.style.overflowY = 'auto';
            setShowCloseButton(false);
        }
    }, [isMenuOpen]);

    return (
        <div className={styles.home}>
            <div className={styles.navContainer}>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    {isMenuOpen ? '': <IoMdMenu size={50} color='white' />}
										{/* <RxCross2 size={50} color='black' />  */}
                </button>
                <nav ref={menuRef} className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
									<h1 style={{color: 'black', textAlign: 'center', fontWeight: '400'}}>Направления</h1>
                    <ul>
                        <li>Frontend-Разработчик</li>
                        <li>Backend-Разработчик</li>
                        <li>Дизайнер</li>
                        <li>Монтажер</li>
                    </ul>
                </nav>
            </div>
						<div className={styles.logo}>
                <img src={logo} alt='logo'/>
                <h1>ProfessionSkill<br/> Academy</h1>
            </div>
						<div className={styles.lkWrap}>
							<button className={styles.lk}>Личный кабинет</button>
						</div>
        </div>
    );
};

export default Home;
