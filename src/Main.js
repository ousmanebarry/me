import React from 'react';
import { links, projects } from './data';

const Main = () => {
	return (
		<>
			<div className='main'>
				<div className='col1'>
					{links.map((sLink) => {
						const { id, name, link, target, rel } = sLink;

						return (
							<a
								key={id}
								className={name}
								href={link}
								target={target}
								rel={rel}
							>
								{name}
							</a>
						);
					})}
				</div>

				<div className='col2'>
					{projects.map((project) => {
						const { id, name, link, target, rel } = project;

						return (
							<a
								key={id}
								className={name}
								href={link}
								target={target}
								rel={rel}
							>
								{name}
							</a>
						);
					})}
				</div>
				<div className='col3'>
					<a
						href='https://github.com/ousmanebarry/me'
						target='_blank'
						rel='noopener noreferrer'
						className='source-code'
					>
						<img
							src='linking_64px.png'
							alt='Redirect Link'
							width='40px'
							height='40px'
						/>
						View Source Code
					</a>
				</div>
			</div>
		</>
	);
};

export default Main;
