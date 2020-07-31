import React from 'react'

import './resumepreview.styles.scss'

export const ResumePreview = ({ title, items }) => (
	<div className='row timeline'>
		<div className='container'>
			<h2 className='title'>{title.toUpperCase()}</h2>

			<div className='row'>
				{items.map((item) => (
					<div className='col-md-6 col-sm-6 note' key={item.id}>
						<div className='note-bg'>
							<h4>{item.name}</h4>

							<h5>{item.subName}</h5>

							<p>
								{item.description}
								<span>{item.location}</span>
							</p>

							<p className='date'>{item.date}</p>
							<span className='arrow fa fa-play'></span>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
)
