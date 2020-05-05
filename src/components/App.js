import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'components/common/PrivateRoute';
import PostList from 'components/posts/List';
import Header from 'components/common/Header';
import NewPost from 'components/posts/NewPost';
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import { loadUser } from 'actions/auth.action';
import store from 'store';

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <PrivateRoute exact path='/' component={PostList} />
          <PrivateRoute exact path='/newpost' component={NewPost} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Fragment>
    );
  }
}
