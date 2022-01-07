import Head from 'next/head';
import Link from 'next/link';
import Form from './Form';
import styles from '../styles/Home.module.css';

export default function Home() {
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
							class={styles.image}
						></img>
						<h1 className={styles.title}>Ousmane Barry</h1>

						<p className={styles.description}>
							Software Engineering Student at the University of Ottawa
						</p>
					</div>
					<div className={styles.mail}>
						<Link href='mailto:kegnekobarry822@gmail.com'>
							<a target='_blank'>
								<p>Mail</p>
							</a>
						</Link>
					</div>
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
