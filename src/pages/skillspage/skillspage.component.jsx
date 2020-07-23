import React from 'react'

import browserIcon from '../../assets/icons/icons8-open-in-browser-26.png'
import databaseIcon from '../../assets/icons/icons8-database-26.png'
import deploymentIcon from '../../assets/icons/icons8-clouds-26.png'

import { SkillPreview } from '../../components/skillPreview/skillPreview.component'

import './skillspage.styles.scss'

class SkillsPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			skills: [
				{
					id: 1,
					icon: browserIcon,
					title: 'front end',
					subSkill: ['HTML5', 'CSS3 | SCSS', 'JavaScript', 'React'],
				},
				{
					id: 2,
					icon: databaseIcon,
					title: 'database',
					subSkill: ['Firebase', 'Strapi'],
				},
				{
					id: 3,
					icon: deploymentIcon,
					title: 'deployment',
					subSkill: ['Heroku', 'GitHub', 'Firebase', 'Netlify'],
				},
			],
		}
	}

	render() {
		const { skills } = this.state
		return (
			<section id='skills' className='section-padding'>
				<div className='container'>
					<div className='section-title text-center'>
						<h2>SKILLS.</h2>
					</div>
					<SkillPreview skills={skills}></SkillPreview>
				</div>
			</section>
		)
	}
}

export default SkillsPage
