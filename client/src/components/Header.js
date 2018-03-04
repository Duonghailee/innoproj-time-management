import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//React uses className instead of the standard css class
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    //console.log(this.props);
    //Link to= checks if this.props.auth is true and changes to the /main dir
    //else if not logged in its a link to the root dir
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/main" : "/"}
            className="left brand-logo"
          >
            TMLogo
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

//auth property will be imported to the props property
export default connect(mapStateToProps)(Header);