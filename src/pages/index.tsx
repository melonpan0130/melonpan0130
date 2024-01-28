import React from 'react';
import { Route, Routes, useParams } from 'react-router';
import BoardComponent from '../components/BoardComponent/BoardComponent';
import LayoutComponent from '../components/LayoutComponent/LayoutComponent';
import './index.scss';

const IndexPage: React.FC = () => {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<BoardComponent />} />
        <Route path="/:topicId" element={<BoardRedirect />} />
        {/* <Route path="/:topicId/:postId" element={<BoardComponent />} /> */}
      </Routes>
    </LayoutComponent>
  );
};
const BoardRedirect = () => {
  const { topicId } = useParams();
  return <BoardComponent filter={`${topicId}`} />;
};

export default IndexPage;
