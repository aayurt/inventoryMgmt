import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import * as actions from "../store/actions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Header=(props)=>{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = e => {
    e.preventDefault();
    props.dispatch(actions.authLogout());
    setAnchorEl(null);

  }
    return (
      <header className="d-flex align-items-center justify-content-between">
        <h1 className="logo my-0 font-weight-normal h4">
          <Link to="/">Inventory Management</Link>
        </h1>

        {props.isAuthenticated && (
          <div className="navigation d-flex justify-content-end">
           
            <ExpandMoreIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
         
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </header>
    );
  
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated
});

export default connect(mapStateToProps)(Header)
