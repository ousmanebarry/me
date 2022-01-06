import Head from 'next/head';
// import Image from 'next/image';
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
				</main>

				<div className={styles.footer}>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Made using{' '}
						<span className={styles.logo}>
							<img src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}
