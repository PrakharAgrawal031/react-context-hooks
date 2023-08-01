import React, { Component, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <AuthContext.Consumer>
        {(authcontext) => {
        const {isAuthenticated, toggleauth} = authcontext;
        return(
          <nav style={{ background: theme.ui, color: theme.color }}>
            <h1>Read-List</h1>
            <div onClick={toggleauth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>)
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
