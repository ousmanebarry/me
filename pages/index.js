import Head from 'next/head';
import Link from 'next/link';
import Form from '../components/Form';
import Success from '../components/Success';
import Null from '../components/Null';
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export const ThemeContext = React.createContext();

export default function Home() {
	const [clicked, setClicked] = useState(false);
	const [sent, setSent] = useState(false);

	const checkClicked = () => {
		setClicked(!clicked);
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
							src='https://d1fdloi71mui9q.cloudfront.net/Wdb1qBs7RUmJH9r3aefW_vb7D2MMO59tsukL6'
							alt='Profile'
							filter='none'
							className={styles.image}
						></img>
						<h1 className={styles.title}>Ousmane Barry</h1>

						<p className={styles.description}>
							Software Engineering Student at the University of Ottawa
						</p>
					</div>
					<div className={styles.mail} onClick={checkClicked}>
						<p>Contact Me</p>
						{/* <img src='/dropdown.svg' /> */}
					</div>

					{clicked ? (
						sent ? (
							<Success btn_close={checkClicked} />
						) : (
							<ThemeContext.Provider value={setSent}>
								<Form />
							</ThemeContext.Provider>
						)
					) : (
						<Null />
					)}

					<div className={styles.github}>
						<Link href='https://github.com/ousmanebarry/'>
							<a target='_blank'>
								<p>Github</p>
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
