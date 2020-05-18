import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from 'components/common/PrivateRoute';
import PostList from 'components/posts/List';
import NewPost from 'components/posts/NewPost';
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Post from 'components/posts/Post';
import { loadUser } from 'actions/auth.action';
import { getPostList } from 'actions/posts/posts.action';

const mapStateToProps = (state) => ({
  posts: state.postReducer.postList,
});

class App extends Component {
  componentDidMount() {
    const { getPosts, loadUser } = this.props;
    loadUser();
    getPosts();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={PostList} />
        <PrivateRoute exact path='/post/new' component={NewPost} />
        <Route exact path='/post/:postId' component={Post} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    );
  }
}

export default connect(mapStateToProps, { getPosts: getPostList, loadUser })(App);
