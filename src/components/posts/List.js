import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts, togglePost } from 'actions/posts.action';

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <div className='container my-5'>
        <h1>Posts</h1>
        <table className='table table-stripped table-bordered mt-3'>
          <thead>
            <tr>
              <td>ID</td>
              <td>User</td>
              <td>Title</td>
              <td>Description</td>
              <td>Required Amount</td>
              <td>Collected Amount</td>
              <td>Due Date</td>
              <td>Verified</td>
              <td>Recommended</td>
              <td>Not Recommended</td>
              <td>Active</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.owner}</td>
                <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                <td>{post.description}</td>
                <td>{post.required_amount}</td>
                <td>{post.collected_amount}</td>
                <td>{post.due_date}</td>
                <td>{post.verified.toString()}</td>
                <td>{post.recommended}</td>
                <td>{post.not_recommended}</td>
                <td>{post.active.toString()}</td>
                <td>
                  {post.active ? (
                    <button
                      className='btn btn-danger btn-block'
                      onClick={() => this.props.togglePost(post.id, false)}
                    >
                      Disable
                    </button>
                  ) : (
                    <button
                      className='btn btn-primary btn-block'
                      onClick={() => this.props.togglePost(post.id, true)}
                    >
                      Enable
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPosts, togglePost })(PostList);
