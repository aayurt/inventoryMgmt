import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import * as actions from '../store/actions';

class Header extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.authLogout());
  };

  render() {
    return (
      <header className="d-flex align-items-center justify-content-between">
        <h1 className="logo my-0 font-weight-normal h4">
          <Link to="/">Inventory Management</Link>
        </h1>

        {this.props.isAuthenticated && (
          <div className="navigation d-flex justify-content-end">
                  <Button onClick={this.handleLogout}>
                    Log Out
                  </Button>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
