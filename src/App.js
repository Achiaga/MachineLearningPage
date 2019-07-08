import React, { Component } from 'react';

import NavBar from './components/NavBar.js';
import SectionHero from './components/SectionHero';
import SectionImages from './components/SectionImages';
import SectionCompanyInfo from './components/SectionCompanyInfo';
import SectionAwards from './components/SectionAwards';
import SectionBuisnessPlans from './components/SectionBuisnessPlans';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<SectionHero />
				<SectionImages />
				<SectionCompanyInfo />
				<SectionAwards />
				<SectionBuisnessPlans />
				<Footer />
			</div>
		);
	}
}
export default App;
