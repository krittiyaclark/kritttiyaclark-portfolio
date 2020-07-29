import React from 'react'

import './portfoliopreview.styles.scss'

export const PortfolioPreview = ({ portfolioPreview }) => (
	<div className='row'>
		{portfolioPreview.map((portfolio) => (
			<div className='col-md-4 col-sm-6' key={portfolio.id}>
				<div className='card text-center box'>
					<div className='flip-card'>
						<div className='flip-card-inner'>
							<div className='flip-card-front'>
								<img
									src={portfolio.image}
									alt='icon'
									className='card-img-top img-fluid'
								/>
								<div className='card-body'>
									<h4 className='card-title'>
										{portfolio.title.toUpperCase()}
									</h4>
									<ul className='list-unstyled flex-wrap'>
										<h5>Stack: </h5>
										{portfolio.stack.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
									<h5>
										Deployment: <span>{portfolio.deployment}</span>
									</h5>
								</div>
							</div>

							<div className='flip-card-back'>
								<p className='card-text'>{portfolio.projectDescription}</p>

								<div className='flex'>
									<a
										href={portfolio.liveProjectUrl}
										rel='noopener noreferrer'
										target='_blank'
										className='button-center text-center button-hover hvr-sweep-to-left'>
										{portfolio.view}
									</a>
									<a
										href={portfolio.projectGitHubUrl}
										rel='noopener noreferrer'
										target='_blank'
										className='button-center text-center button-hover hvr-sweep-to-left'>
										{portfolio.gitHub}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		))}
	</div>
)
