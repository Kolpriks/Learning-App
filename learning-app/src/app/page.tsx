import Image from "next/image";
import Link from "next/link";
const logo = '/generated-logo-no_backgroud.png';
const personProf = '/person-prof.png';

export default function Home() {
  return (
    <main className="home-page"> 
			<div className="header flex">
				<div className="flex">
						<Image src={logo} alt="Logo" width={200} height={200}/>
						<h1>ProfessionSkill<br/> Academy</h1>
					</div>
					<div>
						<h2>Язык: Русский</h2>
					</div>
			</div>

			<div className="middle-text">
				<div className="two-text">
					<h1>Добро пожаловать в <span style={{ color: '#FFC700', fontSize: '4rem', fontWeight: '500' }}>ProfessionSkill Academy</span></h1>
					<h1>Здесь ты сможешь быстро познакомиться с основами интересующей тебя профессией!</h1>
				</div>
				<Image src={personProf} alt="main picture of profession" width={800} height={800} className="main-image"/>
			</div>

			<div className="buttons">
				<Link href="/registration">
					<button className="registration-button">Зарегистрироваться</button>
				</Link>
				<Link href="/login">
					<button className="login-button">Войти</button>
				</Link>
				
			</div>
    </main>
  );
}
 