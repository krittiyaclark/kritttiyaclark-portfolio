import React from 'react'

import { PortfolioPreview } from '../../components/portfoliopreview/portfoliopreview.component'

import project01 from '../../assets/images/beach-resort-react-app.jpg'
import project02 from '../../assets/images/clothing_store.jpg'

import './portfoliopage.styles.scss'

class PortfolioPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			portfolios: [
				{
					id: 1,
					image: project01,
					title: 'Beach Resort',
					stack: [
						'HTML5',
						'CSS3 | SCSS',
						'React',
						'ContextApi',
						'Hooks',
						'Netlify',
					],
					projectDescription:
						'A responsive website built with React is a website to show a beach room resort, which shows each room detail and sorting features. For example, sorted by room-type, price, feature, capacity',
					view: 'Project',
					liveProjectUrl: 'https://beach-resort-react-app-live.netlify.app',
					gitHub: 'GitHub',
					projectGitHubUrl:
						'https://github.com/krittiyaclark/beach-resort-react',
				},
				{
					id: 2,
					image: project02,
					title: 'Clothing Store',
					stack: [
						'HTML5',
						'CSS3 | SCSS',
						'Bootstrap',
						'React',
						'Netlify',
						'firebase',
					],
					projectDescription:
						'An e-commerce clothing store is responsive using Bootstrap 4. It has a lot of features with Google authentication for sign-in & sign-up, Firebase for store the user, add to cart item and integrate payment method with Stripe',
					view: 'Project',
					liveProjectUrl: 'https://clothing-store--live.herokuapp.com',
					gitHub: 'GitHub',
					projectGitHubUrl: 'https://github.com/krittiyaclark/clothing-store',
				},
				{
					id: 3,
					title: 'deployment',
					image: 'https://via.placeholder.com/350',
					stack: ['AWS ECS', 'Heroku', 'GitHub'],
					projectDescription: '',
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
