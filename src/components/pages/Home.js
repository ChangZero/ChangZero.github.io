import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import HomeWarp from '../organisms/HomeWrap';


export class Home extends Component {
	render() {
    return (
      <StyledPage>
        <Header page="home" />
        <StyledContent>
          <HomeWarp />
        </StyledContent>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </StyledPage>
		);
	}
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  flex: 1;
`;

const StyledFooter = styled.footer`
  background-color: #111;
  padding: 1rem;
  text-align: center;
`;

export default Home;
