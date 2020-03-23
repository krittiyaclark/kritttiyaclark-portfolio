import React from 'react';

import './skillpreview.styles.scss';

export const SkillPreview = props => (
	<div className='row'>
		{props.skills.map(skill => (
			<div className='col' key={skill.id}>
				<img src={skill.icon} alt='icon' />
				<h1>{skill.name}</h1>
				<ul>
					<li>{skill.skill}</li>
				</ul>
			</div>
		))}
	</div>
);
