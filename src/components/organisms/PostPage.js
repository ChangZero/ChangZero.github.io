import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// 가상의 포스트 데이터 (이 예제에서는 하드코딩)
const postContent = {
  1: `
# My First Post
This is the detailed content of my first post.
- Point 1
- Point 2
- Point 3
`,
  2: `
# Understanding React Hooks
This is the detailed content of the post about React Hooks.
\`\`\`javascript
useEffect(() => {
  console.log("Hello, Hooks!");
}, []);
\`\`\`
`
};

const PostPage = () => {
  const { postId } = useParams(); // URL에서 포스트 ID를 가져옴
  const content = postContent[postId];

  return (
    <StyledPostPage>
      <ReactMarkdown>{content}</ReactMarkdown>
    </StyledPostPage>
  );
};

const StyledPostPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #111;
  color: #fff;
  border-radius: 10px;

  h1 {
    font-size: 36px;
    color: #ffb400;
    margin-bottom: 20px;
  }

  p, li {
    font-size: 18px;
    line-height: 1.6;
    color: #eaeaea;
  }

  code {
    background-color: #333;
    padding: 2px 4px;
    border-radius: 4px;
    color: #ffb400;
  }

  pre {
    background-color: #333;
    padding: 10px;
    border-radius: 10px;
    overflow-x: auto;
    code {
      background: none;
      padding: 0;
    }
  }
`;

export default PostPage;
