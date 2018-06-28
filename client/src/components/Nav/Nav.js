import React from "react";

const Nav = () => (
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">
        <span className="glyphicon glyphicon-home"></span>
      </a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/saved">Saved</a></li>
    </ul>
  </div>
</nav>
);

export default Nav;
