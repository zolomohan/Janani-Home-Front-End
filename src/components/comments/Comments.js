import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments, addComment, disableComment } from 'actions/posts/comments.action';

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  comments: state.postReducer.post.comments,
});

class CommentList extends Component {
  state = {
    comment: '',
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    if (!this.props.isAuthenticated) this.props.history.push('/login');
    else {
      this.props.addComment(this.props.postId, this.state);
      this.setState({ comment: '' });
    }
  };
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }
  render() {
    return (
      <div>
        <h3>Comments</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='comment' className='lead'>
              New Comment
            </label>
            <input
              type='text'
              className='form-control'
              id='comment'
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
        </form>
        {this.props.comments.map((comment) => (
          <div>
            <h6>{comment.user}</h6>
            <p className='lead'>{comment.body}</p>
            <button className='btn btn-info' onClick={() => this.props.disableComment(comment.id)}>
              Disable
            </button>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, { getComments, addComment, disableComment })(CommentList);
