import React from 'react';

import RESUME_DATA from './resume.data';

import { ResumePreview } from '../../components/resumepreview/resumepreview.component';

import './resumepage.styles.scss';

class ResumePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			resume: RESUME_DATA
		};
	}

	render() {
		const { resume } = this.state;
		return (
			<section id='resume' className='section-padding'>
				<div className='container'>
					<div className='section-title text-center'>
						<h2>PORTFOLIO.</h2>
					</div>
					{resume.map(({ id, ...otherResumeProps }) => (
						<ResumePreview key={id} {...otherResumeProps} />
					))}
				</div>
			</section>
		);
	}
}

export default ResumePage;
