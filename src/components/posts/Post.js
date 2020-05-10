import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePost, getPost } from 'actions/posts/posts.action';
import {
  likePost,
  dislikePost,
  removeLike,
  removeDislike,
  getUserPostLikeStatus,
  getLikeCount,
} from 'actions/posts/likes.action';
import Comments from 'components/comments/Comments';

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
  getUserPostLikeStatus,
  getLikeCount,
};

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
    this.props.getLikeCount(this.props.match.params.postId);
    this.props.getUserPostLikeStatus(this.props.match.params.postId);
  }

  render() {
    const { post, auth, togglePost, likePost, dislikePost, removeLike, removeDislike } = this.props;
    return post ? (
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
        {auth.user && auth.user.id === post.owner ? (
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
          className={`btn btn-${post.liked ? 'primary' : 'dark'}`}
          onClick={() => {
            !this.props.auth.isAuthenticated
              ? this.props.history.push('/login')
              : post.liked
              ? removeLike(post.id)
              : likePost(post.id);
          }}
        >
          Like
        </button>
        <button
          className={`ml-4 btn btn-${post.disliked ? 'primary' : 'dark'}`}
          onClick={() => {
            !this.props.auth.isAuthenticated
              ? this.props.history.push('/login')
              : post.disliked
              ? removeDislike(post.id)
              : dislikePost(post.id);
          }}
        >
          Dislike
        </button>
        <hr />
        <Comments postId={this.props.match.params.postId} history={this.props.history} />
      </div>
    ) : null;
  }
}

export default connect(mapStateToProps, mapActionToProps)(Post);
