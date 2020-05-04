import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from 'components/posts/List';
import Header from 'components/common/Header';
import NewPost from 'components/posts/NewPost';
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Fragment>
              <NewPost />
              <PostList />
            </Fragment>
          )}
        />
        <Route
          exact
          path='/login'
          component={Login}
        />
        <Route
          exact
          path='/register'
          component={Register}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
