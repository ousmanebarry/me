import styles from '../styles/Home.module.css';
import { useState, useRef, useContext } from 'react';
import Link from 'next/link';
import { init, send } from '@emailjs/browser';
import { ThemeContext } from '../pages/index';

export default function Form() {
	const setSent = useContext(ThemeContext);
	const [chars, setChars] = useState(0);
	const [sending, setSending] = useState('Send');
	const [isOk, setIsOk] = useState(' ');
	const name = useRef();
	const email = useRef();
	const message = useRef();

	init('user_o2VIQChdqW6GlI6yDoXaU');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSending('Sending...');
		send('service_og1y08w', 'template_79s52rc', {
			to_name: 'Ousmane Barry',
			from_name: name.current.value,
			message: `Name : ${name.current.value}|
			Email : ${email.current.value}|
			Message : ${message.current.value}`,
		})
			.then((res) => {
				setSent(true);
				return res;
			})
			.catch((err) => {
				setSent(false);
				setIsOk('There was an error sending the message, please try again.');
				return err;
			});
	};

	return (
		<>
			<div className={styles.fields}>
				<form onSubmit={handleSubmit}>
					<input
						name='name'
						placeholder='Full name*'
						type='text'
						className={styles.name}
						ref={name}
						autoComplete='off'
						required
					></input>

					<input
						name='email'
						placeholder='Email address*'
						type='text'
						className={styles.email}
						ref={email}
						autoComplete='off'
						required
					></input>

					<textarea
						name='message'
						placeholder='Message*'
						maxLength='500'
						type='text'
						className={styles.message}
						ref={message}
						autoComplete='off'
						onChange={(e) => setChars(e.target.value.length)}
						required
					></textarea>

					<p className={styles.chars_count}>{500 - chars} characters left</p>

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
						{sending}
					</button>
					<p className={styles.red}>{isOk}</p>
				</form>
			</div>
		</>
	);
}
