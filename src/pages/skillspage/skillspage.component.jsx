import React from 'react';

import browserIcon from '../../assets/icons/icons8-open-in-browser-26.png';
import databaseIcon from '../../assets/icons/icons8-database-26.png';
import deploymentIcon from '../../assets/icons/icons8-clouds-26.png';

import Skill from '../../components/skillPreview/skillPreview.component';

import './skillspage.styles.scss';

class SkillsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			skills: [
				{
					id: 1,
					icon: browserIcon,
					name: 'frontEnd',
					skill: 'HTML5, CSS3 | SCSS, JavaScript, React'
				},
				{
					id: 2,
					icon: databaseIcon,
					name: 'database',
					skill: 'firebase'
				},
				{
					id: 3,
					icon: deploymentIcon,
					name: 'deployment',
					skill: 'AWS ECS, Heroku, GitHub'
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
					{skills.map(({ id, ...otherSkillProps }) => (
						<Skill key={id} {...otherSkillProps} />
					))}
				</div>
			</section>
		);
	}
}

export default SkillsPage;
