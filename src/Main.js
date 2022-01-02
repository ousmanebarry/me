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
				</div>
			</div>
		</>
	);
};

export default Main;
