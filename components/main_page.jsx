import React from 'react';

export default (props) => {
  return (
    <div className="main-page-container">
      <header className='main-page-banner'>
        <img className='banner' src="https://s.hdnux.com/photos/55/61/72/12000916/7/1024x1024.jpg"></img>
        <div className='banner-overlay'></div>
        <div className="banner-text">WELCOME TO MY SITE</div>
      </header>
      <div className="actual-content">
        <div className='profile-image'>
          <img src="https://media.licdn.com/dms/image/C5603AQFj_LB-8QHE2g/profile-displayphoto-shrink_200_200/0?e=1526079600&v=alpha&t=WUIl0-cKlE3MHo1wicrHQNAb_v-oY_JgNYk8NCdG_fs"></img>
        </div>
        <div className='about-me-header'>Patrick Chao - Software Developer</div>
        <div className="about-me">
          Computer hardware has been a lifelong passion of mine, ever since I put together my first computer with my father at the age of 7.
          However, it wasn't until I took the introductory computer science courses at Cal that I discovered a passion for the software side of things.
          After several years in the legal industry after college, I decided to change careers and chase my dream of fulltime software development.
          Today, I work in a variety of languages and frameworks to produce fully featured web applications as a fullstack web developer.

        </div>
        <div className='technologies-header'>Technologies</div>
        <div className='portfolio-header'>Portfolio</div>
        <div className='resume-header'>Resume</div>
        <div className='contact-header'>Contact</div>


      </div>
    </div>
  );
};
