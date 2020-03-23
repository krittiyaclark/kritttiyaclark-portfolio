import React from 'react';

import browserIcon from '../../assets/icons/icons8-open-in-browser-26.png';
import databaseIcon from '../../assets/icons/icons8-database-26.png';
import deploymentIcon from '../../assets/icons/icons8-clouds-26.png';

import { SkillPreview } from '../../components/skillPreview/skillPreview.component';

import './skillspage.styles.scss';

class SkillsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: [
				{
					id: 1,
					icon: browserIcon,
					title: 'front end',
					subSkill: ['HTML5', 'CSS3 | SCSS', 'JavaScript', 'React']
				},
				{
					id: 2,
					icon: databaseIcon,
					title: 'database',
					subSkill: ['firebase']
				},
				{
					id: 3,
					icon: deploymentIcon,
					title: 'deployment',
					subSkill: ['AWS ECS', 'Heroku', 'GitHub']
				}
			]
		};
	}

	render() {
		const { skills } = this.state;
		return (
			<section id='skills' className='section-padding'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							<div className='section-title text-center'>
								<h2>SKILLS.</h2>
							</div>
						</div>
					</div>
					<SkillPreview skills={skills}></SkillPreview>
				</div>
			</section>
		);
	}
}

export default SkillsPage;
