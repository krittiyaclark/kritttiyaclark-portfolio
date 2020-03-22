import React from 'react';

import HomePage from '../../pages/homepage/homepage.component';
import AboutPage from '../../pages/aboutpage/aboutpage.component';
import ProjectsPage from '../../pages/projectspage/projectspage.component';
import SkillsPage from '../../pages/skillspage/skillspage.component';
import ResumePage from '../../pages/resumepage/resumepage.component';
import ContactPage from '../../pages/contactpage/contactpage.component';
import FooterPage from '../../pages/footerpage/footerpage.component';

import './mainpage.styles.scss';

const MainPage = () => (
	<main>
		<HomePage />
		<AboutPage />
		<SkillsPage />
		<ProjectsPage />
		<ResumePage />
		<ContactPage />
		<FooterPage />
		<button id='scrollTop'>
			<a href='#home'>↑</a>
		</button>
	</main>
);

export default MainPage;
