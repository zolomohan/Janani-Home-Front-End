import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from 'components/common/PrivateRoute';
import PostList from 'components/posts/List';
import Header from 'components/common/Header';
import NewPost from 'components/posts/NewPost';
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Post from 'components/posts/Post';
import { loadUser } from 'actions/auth.action';
import { getPosts } from 'actions/posts.action';
import store from 'store';

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

class App extends Component {
  componentDidMount() {
    const { getPosts, loadUser } = this.props;
    loadUser();
    getPosts();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route
            exact
            path='/post/:postId'
            render={(route) => (
              <Post post={this.props.posts.find((post) => post.id == route.match.params.postId)} />
            )}
          />
          <PrivateRoute exact path='/post/new' component={NewPost} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, { getPosts, loadUser })(App);
