import React from "react";

const Nav = () => (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">
        <span className="glyphicon glyphicon-home"></span>
      </a>
    </div>
    <ul className="nav navbar-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/saved">Saved</a></li>
    </ul>
  </div>
</nav>
);

export default Nav;
