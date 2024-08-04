import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactWrap = () => {
  return (
    <StyledContact>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of the following platforms:</p>
      <ul>
        <li>
          <a href="mailto:changzero.kim@gmail.com" target="_blank" rel="noopener noreferrer">
            <i><FaEnvelope /></i>
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/changzero" target="_blank" rel="noopener noreferrer">
            <i><FaLinkedin /></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ChangZero" target="_blank" rel="noopener noreferrer">
            <i><FaGithub /></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/changzero" target="_blank" rel="noopener noreferrer">
            <i><FaInstagram /></i>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/changzero" target="_blank" rel="noopener noreferrer">
            <i><FaTwitter /></i>
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  background-color: #111;
  color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: bold;
    color: #ffb400;
  }

  p {
    margin-bottom: 40px;
    font-size: 18px;
    text-align: center;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      margin: 0 10px;

      a {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-radius: 30px;
        background: #2b2a2a;
        transition: all 0.2s;
        color: #fff;
        text-decoration: none;
        font-size: 18px;

        i {
          margin-right: 10px;
          font-size: 20px;
        }

        span {
          display: inline-block;
          font-size: 16px;
        }

        &:hover {
          background-color: #ffb400;
          span {
            color: #fff;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      li {
        margin: 10px 0;
      }
    }
  }
`;

export default ContactWrap;
