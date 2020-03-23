import React from 'react';

import './skillPreview.styles.scss';

export const SkillPreview = props => (
	<div className='row'>
		{props.skills.map(skill => (
			<div className='col-md-4 col-sm-6' key={skill.id}>
				<div className='card card-box text-center'>
					<img src={skill.icon} alt='icon' className='icon-strategy' />
					<h5 className='card-title'>{skill.title.toUpperCase()}</h5>
					{skill.subSkill.map((item, i) => (
						<ul className='list-unstyled' key={i}>
							<li>{item}</li>
						</ul>
					))}
				</div>
			</div>
		))}
	</div>
);
