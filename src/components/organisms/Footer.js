import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledMDBFooter className='text-center text-white'>
      <MDBContainer className='pt-4'>
        <IconSection className='mb-4'>
          

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-3'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-3'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-3'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-3'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-white m-3'
            href='https://github.com/ChangZero'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </IconSection>
      </MDBContainer>

      <TextContainer className='text-center text-white p-3'>
        © 2024 Copyright:
        <a className='text-white' href='https://ChangZero.github.io/'>
          ChangZero.github.io
        </a>
      </TextContainer>
    </StyledMDBFooter>
  );
}

const StyledMDBFooter = styled(MDBFooter)`
  background-color: #111;
`;

const IconSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center; /* Center the icons vertically */
  gap: 50px; /* Adjust the gap value as needed */
  height: 100px; /* Adjust the height value as needed */
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: '#111';
  text-align: center;
  height: 30px;
  a {
    margin-left: 5px; /* Add some spacing between text and link */
  }
`;
