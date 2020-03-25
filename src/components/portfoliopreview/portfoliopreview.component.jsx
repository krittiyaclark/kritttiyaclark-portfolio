import React from 'react';

import { Link } from 'react-router-dom';

import './portfoliopreview.styles.scss';

export const PortfolioPreview = props => (
	<div className='row'>
		{props.portfolios.map(portfolio => (
			<div className='col-md-4 col-sm-6' key={portfolio.id}>
				<div className='card text-center box-margin'>
					<img src={portfolio.image} alt='icon' className='card-img-top' />
					<div className='card-body'>
						<h5 className='card-title'>{portfolio.title.toUpperCase()}</h5>
						{portfolio.stack.map((item, i) => (
							<ul className='list-unstyled in-line' key={i}>
								<li>{item}</li>
							</ul>
						))}
						<Link
							to='/portfolio-detail'
							className='btn btn-outline-secondary button button-center text-center'>
							{portfolio.view}
						</Link>
					</div>
				</div>
			</div>
		))}
	</div>
);
