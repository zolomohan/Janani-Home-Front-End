import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { togglePost, getPost } from 'actions/posts/posts.action';
import { likePost, dislikePost, removeLike, removeDislike } from 'actions/posts/likes.action';
import Comments from 'components/comments/Comments';
import Navbar from 'components/common/Navbar';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  post: state.postReducer.post,
});

const mapActionToProps = {
  togglePost,
  getPost,
  likePost,
  dislikePost,
  removeLike,
  removeDislike,
};

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  render() {
    const { post, auth, togglePost, likePost, dislikePost, removeLike, removeDislike } = this.props;
    return post ? (
      <Fragment>
        <Navbar />
        <div className='container my-5'>
          <h1>{post.title}</h1>
          <h5>Posted by {post.owner}</h5>
          <p className='lead mt-5'>Description: {post.description}</p>
          <p className='lead'>Due Date: {post.due_date}</p>
          <p className='lead'>Required Amount: {post.required_amount}</p>
          <p className='lead'>Collected Amount: {post.collected_amount}</p>
          <p className='lead'>Verified: {post.verified ? 'True' : 'False'}</p>
          <p className='lead'>Recommended: {post.likes}</p>
          <p className='lead'>Not Recommended: {post.dislikes}</p>
          {auth.user && auth.user.username === post.owner ? (
            post.active ? (
              <button className='btn btn-danger mr-4' onClick={() => togglePost(post.id, false)}>
                Disable
              </button>
            ) : (
              <button className='btn btn-primary mr-4' onClick={() => togglePost(post.id, true)}>
                Enable
              </button>
            )
          ) : null}

          <button
            className={`btn btn-${post.user_liked ? 'primary' : 'dark'}`}
            onClick={() => {
              !this.props.auth.isAuthenticated
                ? this.props.history.push('/login')
                : post.user_liked
                ? removeLike(post.id)
                : likePost(post.id);
            }}
          >
            Like
          </button>
          <button
            className={`ml-4 btn btn-${post.user_disliked ? 'primary' : 'dark'}`}
            onClick={() => {
              !this.props.auth.isAuthenticated
                ? this.props.history.push('/login')
                : post.user_disliked
                ? removeDislike(post.id)
                : dislikePost(post.id);
            }}
          >
            Dislike
          </button>
          <hr />
          <Comments postId={this.props.match.params.postId} history={this.props.history} />
        </div>
      </Fragment>
    ) : null;
  }
}

export default connect(mapStateToProps, mapActionToProps)(Post);
