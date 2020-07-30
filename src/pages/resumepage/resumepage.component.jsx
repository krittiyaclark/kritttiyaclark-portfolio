import React from 'react'

import RESUME_DATA from './resume.data'
import krittiyaclarkResume from '../../assets/images/Krittiya_Clark.jpg'
import { ResumePreview } from '../../components/resumepreview/resumepreview.component'

import './resumepage.styles.scss'

class ResumePage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			resume: RESUME_DATA,
		}
	}

	render() {
		const { resume } = this.state
		return (
			<>
				<section id='resume'>
					<div className='container'>
						<div className='section-title text-center'>
							<h2>RESUME.</h2>
						</div>
						{resume.map(({ id, ...otherResumeProps }) => (
							<ResumePreview key={id} {...otherResumeProps} />
						))}
					</div>
				</section>
				<section className='section-padding'>
					<div className='container text-center'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<a
									href={krittiyaclarkResume}
									target='_blank'
									rel='noopener noreferrer'
									download>
									<button className='button-center text-center button-hover hvr-sweep-to-left'>
										<i className='fa fa-download' aria-hidden='true'></i>
										Dowload Resume
									</button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default ResumePage
