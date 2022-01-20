/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';

export default function Success({ btn_close }) {
	return (
		<div className={styles.fields}>
			<div className={styles.success}>
				<p>
					<span>
						<img src='/checkmark.svg' alt='checkmark icon' />
					</span>
					Message was successfully sent!
				</p>
			</div>
			<button className={styles.btn} onClick={btn_close}>
				Close
			</button>
		</div>
	);
}
