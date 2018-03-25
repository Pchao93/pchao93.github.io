import React from 'react';

export default (props) => {
  return (
    <div className="main-page-container">
      <header id="top" className='main-page-banner'>
        <img className='banner' src="https://s.hdnux.com/photos/55/61/72/12000916/7/1024x1024.jpg"></img>
        <div className='banner-overlay'></div>

      </header>
      <div className="actual-content">
        <div id="about" className='profile-image'>
          <img src="https://media.licdn.com/dms/image/C5603AQFj_LB-8QHE2g/profile-displayphoto-shrink_200_200/0?e=1526079600&v=alpha&t=WUIl0-cKlE3MHo1wicrHQNAb_v-oY_JgNYk8NCdG_fs"></img>
        </div>
        <div className='about-me-header'>Patrick Chao - Software Developer</div>

        <div className="about-me">
          Computers have been a lifelong passion of mine, ever since I was putting together my first PCs with my dad.
          However, it wasn't until I took the introductory computer science courses at Cal that I discovered a passion for the software side of things.
          After several years in the legal industry after college, I decided to change careers and chase my dream of fulltime software development.
          Today, I work in a variety of languages and frameworks to produce fully featured web applications as a fullstack web developer.


        </div>
        <div className='about-me-details'>
          <div className="education"><span>Education: </span><span>U.C. Berkeley</span></div>
          <div className="location"><span>Location: </span><span>SF Bay Area</span></div>
          <div className="work-authorization"><span>Status: </span><span>U.S. Citizen</span></div>
        </div>
        <div  className='technologies-header'>Skills</div>
          <div className='languages-header'>Languages</div>
          <ul className='languages'>
            <li id="skills" className="language">
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
              <i className="devicon-html5-plain colored"></i>
              <span>HTML</span>
            </li>
            <li className="language">
              <i className="devicon-css3-plain colored"></i>
              <span>CSS</span>
            </li>



          </ul>
          <div className='frameworks-header'>Frameworks/Technologies</div>
            <ul className='languages'>
              <li className="language">
                <i className="devicon-rails-plain colored"></i>
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
        <div className='portfolio-header'>Projects</div>
        <div className='portfolio-container'>
          <div className="portfolio-item">

            <div className='item-description goodplays' id="projects" >
              <img src="https://s3-us-west-1.amazonaws.com/experience.images/goodPlays+logo.png" className="project-header goodplays">

              </img>
              <span>Goodreads for video games, a responsively designed single page application built on React/Redux and Rails.</span>
              <div className="project-links">
                <a className='live btn' href="https://www.goodplays.gg">Live</a>
                <a className='live btn' href="https://github.com/Pchao93/goodPlays">Code</a>
              </div>
            </div>
            <div className='item-image'>
              <img src="https://i.imgur.com/z4dX3Um.jpg">

              </img>
            </div>
          </div>
          <div className="portfolio-item" >
            <div className='item-image'>
              <img src="https://i.imgur.com/tQwKFn3.jpg"></img>
            </div>
            <div className='item-description xperience'>
              <img src="https://i.imgur.com/VIl7mJ8.png" className="project-header xperience"></img>
                <span>Yelp for experiences - find date ideas, trip plans, and more! Built on React/Redux and Go, deployed with Docker.</span>

                <div className="project-links">
                  <a className='live btn' href="https://www.goodplays.gg">Live</a>
                  <a className='live btn' href="https://github.com/Pchao93/goodPlays">Code</a>
                </div>
            </div>

          </div>
          <div className="portfolio-item">
            <div className='item-description prettypbp'>
              <img src="https://s3-us-west-1.amazonaws.com/experience.images/PrettyPbP-logo-white.png" className="project-header prettypbp"></img>
                <span>NBA play-by-play recap app built on vanilla JavaScript client and Express.js backend.</span>

                <div className="project-links">
                  <a className='live btn' href="https://www.goodplays.gg">Live</a>
                  <a className='live btn' href="https://github.com/Pchao93/goodPlays">Code</a>
                </div>
            </div>
            <div className='item-image'>
              <img src="https://i.imgur.com/mVwvPLT.jpg"></img>
            </div>

          </div>

        </div>
        <div className='contact-header'>Leave a Message</div>
        <ul className='social-media'>
          <li className="contact-button">
            <i class="far fa-envelope"></i>
            <span>Email</span>
            <span>patrick.chao.14@gmail.com</span>
          </li>
          <li className="contact-button">
            <i class="fas fa-mobile"></i>
            <span>Phone</span>
            <span>(408) 931-5552</span>
          </li>
          <li className="contact-button icon">
            <a href="https://github.com/Pchao93">
              <i className="fab fa-github"></i>
              <span>Github</span>
              <span>PChao93</span>
            </a>
          </li>
          <li className="contact-button icon">
            <a href="https://linkedin.com/in/patrickchao14/">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
              <span>patrickchao14</span>
          </a>
          </li>
        </ul>
        <div className='form-container'>
          <div className="form-image">
            <img src="https://airows.com/.image/t_share/MTI5MDAwNTMwODMwNzkzMTgy/screen-shot-2014-08-25-at-120213-pm.png"></img>
          </div>
          <form method="POST" action="https://formspree.io/patrick.chao.14@gmail.com"id="contact" className="form">
            <div className="top-inputs">
              <input placeholder="Your Name" name="name"></input>
              <input placeholder="Email Address" name="email" type="email" ></input>
            </div>
            <textarea placeholder="Write your message here..." name="body"></textarea>
            <input className="submit-btn" type="submit" value="Send Message"></input>
          </form>
        </div>
        <div className="bottom-padding">

        </div>
      </div>
    </div>
  );
};
