import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from 'actions/posts/posts.action';

class NewPost extends Component {
  state = {
    title: '',
    due_date: '',
    description: '',
    required_amount: '',
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      title: '',
      due_date: '',
      description: '',
      required_amount: '',
    });
    this.props.history.push('/')
  };

  render() {
    return (
      <div className='container mt-5'>
        <h1>New Post</h1>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='title' className='lead'>
              Title
            </label>
            <input
              id='title'
              className='form-control'
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='required_amount' className='lead'>
              Required Amount
            </label>
            <input
              type='number'
              id='required_amount'
              className='form-control'
              onChange={this.onChange}
              value={this.state.required_amount}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='due_date' className='lead'>
              Due Date
            </label>
            <input
              type='date'
              pattern='YYYY-MM-DD'
              className='form-control'
              id='due_date'
              onChange={this.onChange}
              value={this.state.due_date}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description' className='lead'>
              Description
            </label>
            <textarea
              id='description'
              cols='30'
              rows='5'
              className='form-control'
              value={this.state.description}
              onChange={this.onChange}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary px-5'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(NewPost);
