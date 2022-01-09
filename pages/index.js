import Head from 'next/head';
import Link from 'next/link';
import Form from '../components/Form';
import Success from '../components/Success';
import Null from '../components/Null';
import Repos from '../components/Repos';
import React, { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';

export const ThemeContext = React.createContext();

export default function Home() {
	const [clickedMail, setClickedMail] = useState(false);
	const [clickedGithub, setClickedGithub] = useState(false);
	const [sent, setSent] = useState(false);
	const effectMail = useRef();
	const effectGithub = useRef();

	const checkClicked = (btn) => {
		if (btn === 'github') {
			setClickedGithub(!clickedGithub);
			effectGithub.current.classList.toggle(styles.effect);
		} else {
			setClickedMail(!clickedMail);
			effectMail.current.classList.toggle(styles.effect);
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Ousmane Barry</title>
				<link rel='icon' href='a.png' />
			</Head>
			<div className={styles.box}>
				<main className={styles.main}>
					<div className={styles.head}>
						<img
							src='/profile.jpg'
							alt='Profile'
							filter='none'
							className={styles.image}
						></img>
						<h1 className={styles.title}>Ousmane Barry</h1>

						<p className={styles.description}>
							Software Engineering Student at the University of Ottawa
						</p>
					</div>

					<div
						className={styles.github}
						onClick={() => checkClicked('github')}
						ref={effectGithub}
					>
						<p>Github</p>
						<img src='/dropdown.svg' alt='dropdown icon' />
					</div>

					{clickedGithub ? <Repos /> : <Null />}

					<div
						className={styles.mail}
						ref={effectMail}
						onClick={() => checkClicked('mail')}
					>
						<p>Contact Me</p>
						<img
							src='/dropdown.svg'
							alt='dropdown icon'
							className={styles.dropdown}
						/>
					</div>

					{clickedMail ? (
						sent ? (
							<Success btn_close={() => checkClicked('mail')} />
						) : (
							<ThemeContext.Provider value={setSent}>
								<Form />
							</ThemeContext.Provider>
						)
					) : (
						<Null />
					)}

					<div className={styles.portfolio}>
						<Link href='https://ousmanebarry.ca/'>
							<a target='_blank'>
								<p>Portfolio</p>
							</a>
						</Link>
					</div>

					<div className={styles.linkedin}>
						<Link href='https://www.linkedin.com/in/barry-ousmane/'>
							<a target='_blank'>
								<p>LinkedIn</p>
							</a>
						</Link>
					</div>
				</main>
			</div>
		</div>
	);
}
