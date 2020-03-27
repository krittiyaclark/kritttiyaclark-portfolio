import React from 'react';

import { PortfolioPreview } from '../../components/portfoliopreview/portfoliopreview.component';

import './portfoliopage.styles.scss';

class PortfolioPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			portfolios: [
				{
					id: 1,
					image: 'https://via.placeholder.com/350',
					title: 'front end',
					stack: ['HTML5', 'CSS3 | SCSS', 'JavaScript', 'React'],
					view: 'View Details',
					url: 'https://pomodoro-tracker.com'
				},
				{
					id: 2,
					image: 'https://via.placeholder.com/350',
					title: 'database',
					stack: ['firebase'],
					view: 'View Details',
					url: ''
				},
				{
					id: 3,
					title: 'deployment',
					image: 'https://via.placeholder.com/350',
					stack: ['AWS ECS', 'Heroku', 'GitHub'],
					view: 'View Details',
					url: ''
				}
			]
		};
	}

	render() {
		const { portfolios } = this.state;
		return (
			<section id='portfolio' className='section-padding'>
				<div className='container'>
					<div className='section-title text-center'>
						<h2>PORTFOLIO.</h2>
					</div>
					<PortfolioPreview portfolios={portfolios} />
				</div>
			</section>
		);
	}
}

export default PortfolioPage;
