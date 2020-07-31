import React from 'react'

import { PortfolioPreview } from '../../components/portfoliopreview/portfoliopreview.component'

import project01 from '../../assets/images/beach-resort-react-app.jpg'
import project02 from '../../assets/images/clothing_store.jpg'
import project03 from '../../assets/images/gitHub-Search-User-React.png'

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
					stack: ['HTML5', 'CSS3', 'React', 'ContextApi', 'Hooks'],
					deployment: 'Netlify',
					projectDescription:
						'This is a responsive website I built with React. It is a website that features a beach resort, with room details and sorting features. Sorted by room-type, price, feature, and capacity.',
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
					stack: ['HTML5', 'CSS3 | SCSS', 'Bootstrap 4', 'React', 'firebase'],
					deployment: 'Heroku',
					projectDescription:
						'This is an e-commerce clothing store website I built which is responsive. It has a lot of features including Google authentication for sign-in and sign-up, add item to cart, Firebase for storing the user and cart item data, and integrating payment methods with Stripe',
					view: 'Project',
					liveProjectUrl: 'https://clothing-store--live.herokuapp.com',
					gitHub: 'GitHub',
					projectGitHubUrl: 'https://github.com/krittiyaclark/clothing-store',
				},
				{
					id: 3,
					title: 'GitHub Search User',
					image: project03,
					stack: ['HTML5', 'CSS3', 'React', 'ContextApi', 'Hooks'],
					deployment: 'Netlify',
					projectDescription:
						'This GitHub search user app is responsive. It includes data visualizations of your top languages, starred repositories, and allows users to sort through top repos by number of stars and forks',
					view: 'Project',
					liveProjectUrl: 'https://react-search-github-user-live.netlify.app',
					gitHub: 'GitHub',
					projectGitHubUrl:
						'https://github.com/krittiyaclark/gitHub-Search-User-React/tree/master/src',
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
