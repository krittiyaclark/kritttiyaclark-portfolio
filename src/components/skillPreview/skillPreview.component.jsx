import React from 'react';

import './skillPreview.styles.scss';

const Skill = ({ title, skills }) => (
	<div className='row'>
		<div className='col'>
			{skills.map(skill => (
				<div className='card'>
					<h5 className='card-title' key={skill.id}>
						{title.toUpperCase()}
					</h5>
					<img src={skill.icon} alt='icon' />
					<p className='card-text'>{skill.skill}</p>
				</div>
			))}
		</div>
	</div>
);

export default Skill;
