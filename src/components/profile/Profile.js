import React, { Component } from 'react';
import Navbar from 'components/common/Navbar';
import { Link, Redirect } from 'react-router-dom';
import store from 'store';
import { connect } from 'react-redux';
import { getProfile } from 'actions/profile.action';
import { getUserPostList, getDisabledPostList } from 'actions/posts/posts.action';
import { POST, PROFILE } from 'actions/types';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  posts: state.postReducer.userPostList,
});

const mapActionToProps = {
  getProfile,
  getUserPostList,
  getDisabledPostList,
};

class Dashboard extends Component {
  componentDidMount() {
    const { getProfile, getUserPostList, getDisabledPostList, match } = this.props;
    getProfile(match.params.username);
    getUserPostList(match.params.username);
    getDisabledPostList(match.params.username);
  }

  componentWillUnmount() {
    if(this.props.auth.profileDoesNotExist)
      store.dispatch({type: PROFILE.REVERT404})
    store.dispatch({ type: POST.CLEAR.USER });
  }

  render() {
    const { auth, posts, match } = this.props;
    if (
      auth.profileDoesNotExist &&
      auth.isAuthenticated &&
      auth.user.username === match.params.username
    )
      return <Redirect to='/user/profile/create' />;

    return (
      <div>
        <Navbar />
        <div className='container my-5'>
          <div className='row'>
            {!auth.profileDoesNotExist && auth.isAuthenticated && (
              <div className='col'>
                <h1>Profile</h1>
                <p className='lead mt-5'>Date of Birth: {auth.user.dob}</p>
                <p className='lead'>Gender: {auth.user.gender}</p>
                <p className='lead'>Phone: {auth.user.phone}</p>
                <p className='lead'>Phone Alternate: {auth.user.phone_alt}</p>
                <p className='lead'>Address: {auth.user.address}</p>
                <p className='lead'>City: {auth.user.city}</p>
                <p className='lead'>State: {auth.user.state}</p>
                <p className='lead'>Zipcode: {auth.user.zipcode}</p>
                <p className='lead'>Is Student: {auth.user.is_student}</p>
                <p className='lead'>Workplace Name: {auth.user.workplace_name}</p>
                <p className='lead'>Workplace Address: {auth.user.workplace_address}</p>
              </div>
            )}
            <div className='col'>
              <h1>Posts</h1>
              <table className='table table-stripped table-bordered'>
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
                    <td>Active</td>
                  </tr>
                </thead>
                <tbody>
                  {posts.active.map((post) => (
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
                      <td>{post.active.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {posts.disabled.length != 0 && (
                <div className='disabled'>
                  <h1>Disabled Posts</h1>
                  <table className='table table-stripped table-bordered'>
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
                        <td>Active</td>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.disabled.map((post) => (
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
                          <td>{post.active.toString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard);
