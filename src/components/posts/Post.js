import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePost } from 'actions/posts.action';

class Post extends Component {
  render() {
    const { post, togglePost } = this.props;
    return post ? (
      <div className='container my-5'>
        <h1>{post.title}</h1>
        <h5>Posted by {post.owner}</h5>
        <p className='lead mt-5'>Description: {post.description}</p>
        <p className='lead'>Due Date: {post.due_date}</p>
        <p className='lead'>Required Amount: {post.required_amount}</p>
        <p className='lead'>Collected Amount: {post.collected_amount}</p>
        <p className='lead'>Verified: {post.verified.toString()}</p>
        <p className='lead'>Recommended: {post.recommended}</p>
        <p className='lead'>Not Recommended: {post.not_recommended}</p>
        {post.active ? (
          <button className='btn btn-danger' onClick={() => togglePost(post.id, false)}>
            Disable
          </button>
        ) : (
          <button className='btn btn-primary' onClick={() => togglePost(post.id, true)}>
            Enable
          </button>
        )}
      </div>
    ) : null;
  }
}

export default connect(null, { togglePost })(Post);
