import React, { Component } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer'

import styled from 'styled-components';
import Preloader from '../molecules/Preloader';

export class Home extends Component {
	render() {
    return (
      <div>
        <Header page="home" />
        내용 추가 예정
        <Footer />
      </div>
		);
	}
}

export default Home;
