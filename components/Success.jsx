import styles from '../styles/Home.module.css';

export default function Success({ btn_close }) {
	return (
		<div className={styles.fields}>
			<div className={styles.success}>
				<p>
					<span>{/* <img src='/checkmark.svg' alt='' /> */}</span>
					Message was successfully sent!
				</p>
			</div>
			<button className={styles.btn} onClick={btn_close}>
				Close
			</button>
		</div>
	);
}
