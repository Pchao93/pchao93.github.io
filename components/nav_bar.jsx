import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default (props) => {

  return (<nav className="nav-bar-container">
      <Link smooth to="#top">
        <div id="logo">
          Patrick Chao
        </div>
      </Link>

        <ul className="nav-buttons">


          <li className="nav-button">
            <Link smooth to="#about">About</Link>
          </li>
          <li className="nav-button">
            <Link smooth to="#skills" >Skills</Link>
          </li>
          <li className="nav-button">
            <Link smooth to="#projects">Projects</Link>
          </li>
          <li className="nav-button">
            <Link smooth to="#contact">Contact</Link>
          </li>
          <li className="nav-button">
            <a href="./PatrickChaoCV.pdf" target="_blank">Resume</a>
          </li>
        </ul>
    </nav>
  );


};
