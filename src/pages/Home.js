import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/post/post1">첫 번째 블로그 포스트</Link></li>
      </ul>
    </div>
  );
};

export default Home;
