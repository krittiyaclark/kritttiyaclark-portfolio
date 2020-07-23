import React from 'react'

import { PortfolioPreview } from '../../components/portfoliopreview/portfoliopreview.component'

import project01 from '../../assets/images/beach-resort-react-app.jpg'

import './portfoliopage.styles.scss'

class PortfolioPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			portfolios: [
				{
					id: 1,
					image: project01,
					title: 'front end',
					stack: [
						'HTML5',
						'CSS3 | SCSS',
						'JavaScript',
						'React',
						'ContextApi',
						'Hooks',
						'Netlify',
					],
					view: 'Project',
					liveProjectUrl: 'https://beach-resort-react-app-live.netlify.app',
					gitHub: 'GitHub',
					projectGitHubUrl:
						'https://github.com/krittiyaclark/beach-resort-react',
				},
				{
					id: 2,
					image: 'https://via.placeholder.com/350',
					title: 'database',
					stack: ['firebase'],
					view: 'Project',
					liveProjectUrl: '',
					gitHub: 'GitHub',
					projectGitHubUrl: '',
				},
				{
					id: 3,
					title: 'deployment',
					image: 'https://via.placeholder.com/350',
					stack: ['AWS ECS', 'Heroku', 'GitHub'],
					view: 'Project',
					liveProjectUrl: '',
					gitHub: 'GitHub',
					projectGitHubUrl: '',
				},
			],
		}
	}

	render() {
		const { portfolios } = this.state
		return (
			<section id='portfolio' className='section-padding'>
				<div className='container'>
					<div className='section-title text-center'>
						<h2>PORTFOLIO.</h2>
					</div>
					<PortfolioPreview portfolioPreview={portfolios} />
				</div>
			</section>
		)
	}
}

export default PortfolioPage
