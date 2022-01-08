import styles from '../styles/Home.module.css';
import repo from '../public/repos.json';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Repos() {
	return (
		<div className={styles.fields}>
			{repo.map((el) => {
				return (
					<div key={el.id} className={styles.repo}>
						<div className={styles.top}>
							<Icon icon='octicon:repo-16' className={styles.book} />
							<Link href={el.link}>
								<a target='_blank'>{el.repo}</a>
							</Link>
							<span className={styles.public}>Public</span>
						</div>
						<div className={styles.bottom}>
							<div
								style={{ backgroundColor: el.color }}
								className={styles.bubble}
							></div>
							<p>{el.language}</p>

							{parseInt(el.stars) === 0 ? null : (
								<>
									<Icon icon='octicon:star-16' className={styles.star} />
									<p>{el.stars}</p>
								</>
							)}

							{parseInt(el.forks) === 0 ? null : (
								<>
									<Icon icon='octicon:repo-forked-16' className={styles.fork} />
									<p>{el.forks}</p>
								</>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
