import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostList, togglePost } from 'actions/posts.action';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  posts: state.postReducer.postList,
});

class PostList extends Component {
  componentDidMount() {
    this.props.getPostList();
  }
  render() {
    const { auth, posts, togglePost } = this.props;
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
              <td>Disable</td>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.owner}</td>
                <td>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </td>
                <td>{post.description}</td>
                <td>{post.required_amount}</td>
                <td>{post.collected_amount}</td>
                <td>{post.due_date}</td>
                <td>{post.verified.toString()}</td>
                <td>{post.recommended}</td>
                <td>{post.not_recommended}</td>
                <td>{post.active.toString()}</td>

                <td>
                  {auth.user && auth.user.id === post.owner ? (
                    post.active ? (
                      <button
                        className='btn btn-danger btn-block'
                        onClick={() => togglePost(post.id, false)}
                      >
                        Disable
                      </button>
                    ) : (
                      <button
                        className='btn btn-primary btn-block'
                        onClick={() => togglePost(post.id, true)}
                      >
                        Enable
                      </button>
                    )
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPostList, togglePost })(PostList);
