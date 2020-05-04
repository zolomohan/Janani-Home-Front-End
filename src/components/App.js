import React, { Fragment } from 'react';
import PostList from 'components/posts/List';
import Header from 'components/common/Header';
import NewPost from './posts/NewPost';

function App() {
  return (
    <Fragment>
      <Header />
      <NewPost />
      <PostList />
    </Fragment>
  );
}

export default App;
