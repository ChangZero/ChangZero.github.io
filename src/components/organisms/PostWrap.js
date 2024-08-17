import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading from "../atoms/Heading";

const posts = require('../../assets/data/postlist.json');

const PostWrap = () => {
  return (
    <StyledPostWrap>
      <Heading level="1">Blog Posts</Heading>
      <ul>
        {posts.map((post) => (
            <li key={post.id}>
            <Link to={`/posts/${post.date}:${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <Heading level="2">{post.title}</Heading>
            <p>{post.excerpt}</p>
            <span>{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledPostWrap>
  );
};

const StyledPostWrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #111;
  color: #fff;

  h1 {
    font-size: 36px;
    color: #ffb400;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #2b2a2a;
      border-radius: 10px;

      a {
        color: inherit;
        text-decoration: none;

        h2 {
          margin: 0;
          font-size: 24px;
          color: #ffb400;
        }

        p {
          margin: 10px 0;
          font-size: 16px;
          color: #eaeaea;
        }

        span {
          font-size: 14px;
          color: #ccc;
        }

        &:hover {
          background-color: #333;
        }
      }
    }
  }
`;

export default PostWrap;
