import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  togglePost,
  getPost,
  likePost,
  dislikePost,
  removeLike,
  removeDislike,
} from 'actions/posts.action';

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
      <div className='container my-5'>
        <h1>{post.title}</h1>
        <h5>Posted by {post.owner}</h5>
        <p className='lead mt-5'>Description: {post.description}</p>
        <p className='lead'>Due Date: {post.due_date}</p>
        <p className='lead'>Required Amount: {post.required_amount}</p>
        <p className='lead'>Collected Amount: {post.collected_amount}</p>
        <p className='lead'>Verified: {post.verified ? 'True' : 'False'}</p>
        <p className='lead'>Recommended: {post.recommended}</p>
        <p className='lead'>Not Recommended: {post.not_recommended}</p>
        {auth.user && auth.user.id === post.owner ? (
          post.active ? (
            <button className='btn btn-danger' onClick={() => togglePost(post.id, false)}>
              Disable
            </button>
          ) : (
            <button className='btn btn-primary' onClick={() => togglePost(post.id, true)}>
              Enable
            </button>
          )
        ) : null}

        <button
          className={`ml-4 btn btn-${post.liked ? 'primary' : 'dark'}`}
          onClick={() => {
            post.liked ? removeLike(post.id) : likePost(post.id);
          }}
        >
          Like
        </button>
        <button
          className={`ml-4 btn btn-${post.disliked ? 'primary' : 'dark'}`}
          onClick={() => {
            post.disliked ? removeDislike(post.id) : dislikePost(post.id);
          }}
        >
          Dislike
        </button>
      </div>
    ) : null;
  }
}

export default connect(mapStateToProps, mapActionToProps)(Post);
