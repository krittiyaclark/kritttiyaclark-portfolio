import React from 'react';

import './resumepreview.styles.scss';

export const ResumePreview = ({ title, items }) => (
	<div className='row'>
		<h2>{title.toUpperCase()}</h2>

		{items.map(item => (
			<div className='col-md-4 col-sm-6' key={item.id}>
				<ul className='list-unstyled'>
					<li>{item.name}</li>
					<li>{item.subName}</li>
					<li>{item.description}</li>
					<li>{item.date}</li>
				</ul>
			</div>
		))}
	</div>
);
