import React from 'react';

import { Link } from 'react-router-dom';

import './portfoliopreview.styles.scss';

export const PortfolioPreview = props => (
	<div className='row'>
		{props.portfolios.map(portfolio => (
			<div className='col-md-4 col-sm-6' key={portfolio.id}>
				<div className='card text-center box'>
					<div className='flip-card'>
						<div className='flip-card-inner'>
							<div className='flip-card-front'>
								<img
									src={portfolio.image}
									alt='icon'
									className='card-img-top'
								/>
								<div className='card-body'>
									<h5 className='card-title'>
										{portfolio.title.toUpperCase()}
									</h5>
									{portfolio.stack.map((item, i) => (
										<ul className='list-unstyled in-line' key={i}>
											<li>{item}</li>
										</ul>
									))}
								</div>
							</div>
							<div className='card-body'>
								<div className='flip-card-back'>
									<p className='card-text'>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
									<a
										href={portfolio.url}
										rel='noopener noreferrer'
										target='_blank'
										className='btn btn-outline-secondary button button-center text-center'>
										{portfolio.view}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		))}
	</div>
);
