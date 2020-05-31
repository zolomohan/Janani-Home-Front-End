import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/common/Navbar';
import { createProfile } from 'actions/profile.action';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

class CreateProfile extends Component {
  state = {
    dob: '',
    phone: '',
    phone_alt: '',
    gender: 'M',
    is_student: 'true',
    workplace_name: '',
    workplace_address: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  };

  onChange = (event) => this.setState({ [event.target.name]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    this.props.createProfile({ ...this.state, user: this.props.auth.user.id });
    this.setState({
      dob: '',
      phone: '',
      phone_alt: '',
      gender: 'M',
      is_student: 'true',
      workplace_name: '',
      workplace_address: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    });
    this.props.history.push(`/`);
  };

  render() {
    if (!this.props.auth.profileDoesNotExist)
      return <Redirect to={`/user/${this.props.auth.user.username}`} />;
    return (
      <Fragment>
        <Navbar />
        <div className='container my-5'>
          <h1>Create Profile</h1>
          <hr />
          <form onSubmit={this.onSubmit}>
            <div className='form-control mb-4'>
              <label className='lead'>Gender</label>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='male'
                  name='gender'
                  value='M'
                  onChange={this.onChange}
                  checked={this.state.gender === 'M'}
                />
                <label className='form-check-label' htmlFor='male'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='female'
                  name='gender'
                  value='F'
                  onChange={this.onChange}
                  checked={this.state.gender === 'F'}
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
                </label>
              </div>
            </div>

            <div className='form-control mb-4'>
              <label className='lead'>Are you a Student?</label>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='true'
                  name='is_student'
                  value='true'
                  onChange={this.onChange}
                  checked={this.state.is_student === 'true'}
                />
                <label className='form-check-label' htmlFor='true'>
                  Yes
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='false'
                  name='is_student'
                  value='false'
                  onChange={this.onChange}
                  checked={this.state.is_student === 'false'}
                />
                <label className='form-check-label' htmlFor='false'>
                  No
                </label>
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='dob' className='lead'>
                Date of Birth
              </label>
              <input
                type='date'
                pattern='YYYY-MM-DD'
                className='form-control'
                id='dob'
                name='dob'
                onChange={this.onChange}
                value={this.state.dob}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='phone' className='lead'>
                Phone Number
              </label>
              <input
                id='phone'
                name='phone'
                className='form-control'
                onChange={this.onChange}
                value={this.state.phone}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='phone_alt' className='lead'>
                Alternate Phone Number
              </label>
              <input
                id='phone_alt'
                name='phone_alt'
                className='form-control'
                onChange={this.onChange}
                value={this.state.phone_alt}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='workplace_name' className='lead'>
                Workplace Name
              </label>
              <input
                type='text'
                id='workplace_name'
                name='workplace_name'
                className='form-control'
                onChange={this.onChange}
                value={this.state.workplace_name}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='workplace_address' className='lead'>
                Workplace Address
              </label>
              <textarea
                id='workplace_address'
                name='workplace_address'
                cols='30'
                rows='5'
                className='form-control'
                value={this.state.workplace_address}
                onChange={this.onChange}
              ></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='address' className='lead'>
                Address
              </label>
              <textarea
                id='address'
                name='address'
                cols='30'
                rows='5'
                className='form-control'
                value={this.state.address}
                onChange={this.onChange}
              ></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='city' className='lead'>
                City
              </label>
              <input
                type='text'
                className='form-control'
                id='city'
                name='city'
                onChange={this.onChange}
                value={this.state.city}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='state' className='lead'>
                State
              </label>
              <input
                type='text'
                className='form-control'
                id='state'
                name='state'
                onChange={this.onChange}
                value={this.state.state}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='zipcode' className='lead'>
                Zipcode
              </label>
              <input
                type='text'
                className='form-control'
                id='zipcode'
                name='zipcode'
                onChange={this.onChange}
                value={this.state.zipcode}
              />
            </div>

            <button type='submit' className='btn btn-primary px-5'>
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, { createProfile })(CreateProfile);
