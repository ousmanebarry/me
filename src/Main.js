import React from 'react';
import { data } from './data';

const Main = () => {
	return (
		<>
			<div className='main'>
				<div className='col1'>
					{data.map((datum) => {
						if (datum.hasOwnProperty('link')) {
							const { id, name, link, target, rel } = datum;
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
						} else {
							const { id, name, classname } = datum;
							return (
								<>
									<h2 key={id} className={name}>
										{name}
									</h2>
									<div className={classname}></div>
								</>
							);
						}
					})}
					<a
						href='https://github.com/ousmanebarry/me'
						target='_blank'
						rel='noopener noreferrer'
						className='source-code'
					>
						<img
							src='https://cdn.discordapp.com/attachments/439833184260063233/926272727260741722/linking_64px.png'
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
