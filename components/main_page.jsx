import React from 'react';

export default (props) => {
  return (
    <div className="main-page-container">
      <header className='main-page-banner'>
        <img className='banner' src="https://s.hdnux.com/photos/55/61/72/12000916/7/1024x1024.jpg"></img>
        <div className='banner-overlay'></div>

      </header>
      <div className="actual-content">
        <div className='profile-image'>
          <img src="https://media.licdn.com/dms/image/C5603AQFj_LB-8QHE2g/profile-displayphoto-shrink_200_200/0?e=1526079600&v=alpha&t=WUIl0-cKlE3MHo1wicrHQNAb_v-oY_JgNYk8NCdG_fs"></img>
        </div>
        <div className='about-me-header'>Patrick Chao - Software Developer</div>

        <div className="about-me">
          Computer hardware has been a lifelong passion of mine, ever since I was putting together my first computers with my dad.
          However, it wasn't until I took the introductory computer science courses at Cal that I discovered a passion for the software side of things.
          After several years in the legal industry after college, I decided to change careers and chase my dream of fulltime software development.
          Today, I work in a variety of languages and frameworks to produce fully featured web applications as a fullstack web developer.


        </div>
        <div className='about-me-details'>
          <div className="education"><span>Education: </span><span>Econ @ U.C. Berkeley</span></div>
          <div className="location"><span>Location: </span><span>SF Bay Area</span></div>
          <div className="work-authorization"><span>Status: </span><span>U.S. Citizen</span></div>
        </div>
        <div className='technologies-header'>Technologies</div>
          <div className='languages-header'>Languages</div>
          <ul className='languages'>
            <li className="language">
              <i className="devicon-ruby-plain colored"></i>
              <span>Ruby</span>
            </li>
            <li className="language">
              <i className="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </li>
            <li className="language">
              <i className="devicon-python-plain colored"></i>
              <span>Python</span>
            </li>
            <li className="language">
              <i className="devicon-go-plain colored"></i>
              <span>Go</span>
            </li>
            <li className="language">
              <i className="devicon-java-plain colored"></i>
              <span>Java</span>
            </li>
          </ul>
          <ul

            className='languages'>
            <li className="language">
              <i className="devicon-html5-plain colored"></i>
              <span>HTML</span>
            </li>
            <li className="language">
              <i className="devicon-css3-plain colored"></i>
              <span>CSS</span>
            </li>
            <li style={{width: "8vw"}}>
            </li>
            <li style={{width: "8vw"}}>
            </li>
            <li style={{width: "8vw"}}>
            </li>


          </ul>
          <div className='frameworks-header'>Frameworks/Technologies</div>
            <ul className='languages'>
              <li className="language">
                <i class="devicon-rails-plain colored"></i>
                <span>Rails</span>
              </li>
              <li className="language">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </li>
              <li className="language">
                <i className="devicon-amazonwebservices-original colored"></i>
                <span>AWS</span>
              </li>
              <li className="language">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </li>
              <li className="language">
                <i className="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </li>
            </ul>
            <ul className='languages'>
              <li className="language">
                <i

                  className="devicon-express-original colored"></i>
                <span>Express.js</span>
              </li>
              <li className="language">
                <i className="devicon-nodejs-plain colored"></i>
                <span>Node.js</span>
              </li>
              <li className="language">
                <i className="devicon-redis-plain colored"></i>
                <span>Redis</span>
              </li>
              <li className="language">
                <i className="devicon-docker-plain colored"></i>
                <span>Docker</span>
              </li>
              <li className="language">
                <i className="devicon-jquery-plain colored"></i>
                <span>jQuery</span>
              </li>
            </ul>
        <div className='portfolio-header'>Portfolio</div>
        <div className='portfolio-container'>
          <div className="portfolio-item">
            <div className='item-image'></div>
            <div className='item-description'></div>
          </div>
          <div className="portfolio-item">
            <div className='item-description'></div>
            <div className='item-image'></div>
          </div>
          <div className="portfolio-item">
            <div className='item-image'></div>
            <div className='item-description'></div>
          </div>

        </div>
        <div className='resume-header'>Resume</div>
        <div className='contact-header'>Contact</div>


      </div>
    </div>
  );
};
