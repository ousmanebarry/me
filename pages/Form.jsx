import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function Form() {
	const [chars, setChars] = useState(0);

	return (
		<>
			<div className={styles.fields}>
				<form action='/' method='post'>
					<input
						name='name'
						placeholder='Full name*'
						type='text'
						className={styles.name}
						autoComplete='off'
						required
					></input>

					<input
						name='email'
						placeholder='Email address*'
						type='text'
						className={styles.email}
						autoComplete='off'
						required
					></input>

					<textarea
						name='message'
						placeholder='Message*'
						maxLength='500'
						type='text'
						className={styles.message}
						autoComplete='off'
						onChange={(e) => setChars(e.target.value.length)}
						required
					></textarea>

					<p className={styles.chars_count}>{chars}/500</p>

					<div className={styles.consent_div}>
						<p className={styles.consent}>
							By submitting your contact details, you are providing your data to
							Ousmane Barry who may contact you. You can alternatively send me
							an email at{' '}
							<span>
								<Link href='mailto:kegnekobarry822@gmail.com'>
									kegnekobarry822@gmail.com
								</Link>
							</span>
							.
						</p>
					</div>

					<button type='submit' className={styles.submit}>
						Send
					</button>
				</form>
			</div>
		</>
	);
}
