import styles from '../styles/Home.module.css';

export default function Form() {
	return (
		<>
			<div className={styles.fields}>
				<form action='/' method='post'>
					<input name='name' placeholder='Name*' type='text' value=''></input>
					<p>Please enter a name</p>
					<input
						name='email'
						placeholder='Email address*'
						type='text'
						value=''
					></input>
					<p>Please enter a valid email address</p>
					<input name='name' placeholder='Name*' type='text' value=''></input>
					<p>Please enter a name</p>
				</form>
			</div>
		</>
	);
}
