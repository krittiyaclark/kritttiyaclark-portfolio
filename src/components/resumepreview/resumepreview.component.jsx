import React from 'react';

import './resumepreview.styles.scss';

export const ResumePreview = ({ title, items }) => (
	<div className='row timeline'>
		<div className='container'>
			<h2 className='title'>{title.toUpperCase()}</h2>
		</div>
		<div className='row'>
			{items.map(item => (
				<div className='col-md-6 col-sm-6 note' key={item.id}>
					<div className='note-bg'>
						<h4>{item.name}</h4>

						<h5>{item.subName}</h5>

						<p>{item.description}</p>

						{item.date}
						<span className='arrow fa fa-play'></span>
					</div>
				</div>
			))}
		</div>
	</div>
);
