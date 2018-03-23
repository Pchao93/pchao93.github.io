import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default (props) => {
  return (<nav className="nav-bar-container">
      <a href="#">
        <div id="logo">
          Patrick Chao
        </div>
      </a>

        <ul className="nav-buttons">
          <li className="nav-button">
            <a href="./PatrickChaoCV.pdf" target="_blank">Resume</a>
          </li>
          <li className="nav-button">
            <Link smooth to="#projects">Projects</Link>
          </li>
          <li className="nav-button">
            <a href="https://github.com/Pchao93"><i className="fab fa-github"></i></a>
          </li>
          <li className="nav-button">
            <a href="https://linkedin.com/in/patrickchao14/"><i className="fab fa-linkedin"></i></a>
          </li>
          <li className="nav-button">
            <Link smooth to="#contact">Contact</Link>
          </li>
        </ul>
    </nav>
  );


};
