import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'actions/posts.action';

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <div className='container'>
        <h1>Posts</h1>
        <table className='table table-stripped table-borderes'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Required Amount</td>
              <td>Collected Amount</td>
              <td>Due Date</td>
              <td>Verified</td>
              <td>Recommended</td>
              <td>Not Recommended</td>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.required_amount}</td>
                <td>{post.collected_amount}</td>
                <td>{post.due_date}</td>
                <td>{post.verified.toString()}</td>
                <td>{post.recommended}</td>
                <td>{post.not_recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPosts })(PostList);
