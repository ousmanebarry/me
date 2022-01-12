import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Success({ btn_close }) {
	return (
		<div className={styles.fields}>
			<div className={styles.success}>
				<p>
					<span className={styles.success_img}>
						<Image
							src='/checkmark.svg'
							alt='checkmark icon'
							width='19px'
							height='19px'
						/>
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
