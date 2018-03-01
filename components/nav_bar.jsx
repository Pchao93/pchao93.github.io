import React from 'react';

export default (props) => {
  return (<nav className="nav-bar-container">
      <a href="/">
        <div id="logo">
        </div>
      </a>

        <ul className="nav-buttons">
          <li className="nav-button">
            <a href="./resume">Resume</a>
          </li>
          <li className="nav-button">
            <a href="./projects">Projects</a>
          </li>
          <li className="nav-button">
            <a href="https://github.com/Pchao93"><i className="fab fa-github"></i></a>
          </li>
          <li className="nav-button">
            <a href="https://linkedin.com/in/patrick-chao-560a0566/"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>
    </nav>
  );


};
