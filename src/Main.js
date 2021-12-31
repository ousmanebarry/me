import React from 'react';
import { data } from './data';

const Main = () => {
	return (
		<>
			<div className='main'>
				<div className='col1'>
					{data.map((datum) => {
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
					})}
				</div>
			</div>
		</>
	);
};

export default Main;
