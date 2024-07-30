import React, { Component } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import HomeWarp from '../organisms/HomeWrap';


export class Home extends Component {
	render() {
    return (
      <div>
        <Header page="home" />
        <HomeWarp />
        <Footer />
      </div>
		);
	}
}

export default Home;
