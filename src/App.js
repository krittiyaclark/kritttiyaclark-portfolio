import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import SkillsPage from './pages/skillspage/skillspage.component';
import PortfolioPage from './pages/portfoliopage/portfoliopage.component';
import ResumePage from './pages/resumepage/resumepage.component';
import FooterPage from './pages/footerpage/footerpage.component';

import Header from './components/header/header.component';

import './App.scss';

function App() {
	return (
		<main>
			<Header />
			<HomePage />
			<AboutPage />
			<SkillsPage />
			<PortfolioPage />
			<ResumePage />
			<FooterPage />
			<button id='scrollTop'>
				<a href='#home'>↑</a>
			</button>
		</main>
	);
}

export default App;
