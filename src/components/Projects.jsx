import Carousel from "./Carousel"
import project1 from "../assets/images/ninjump.png"
import project2 from "../assets/images/superhero.png"
import project3 from "../assets/images/legends.png"
import project4 from "../assets/images/techfolio.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Projects() {
  const images = [
    project1,
    project2,
    project3,
    project4
  ]//reminder to update superhero picture and redeploy
  return (
    <>
      <div className="projects">
        <div className="projects-top">
          <h3>Projects</h3>
          <Carousel images={images} />
        </div>

        <div className="projects-bottom">
          <Container fluid className="project-info">

            <Row>
              <Col md={6}>
                <div className="project-container">
                  <div className="info-centered">
                    <h3>Project 1: Ninjump</h3>
                    <p>Solo Project</p>
                    <p>
                      Links: <a href="https://jerrellbb.github.io/Ninja-Frogger/" target="_blank" rel="noreferrer">Ninjump</a>, <a href="https://github.com/Jerrellbb/Ninja-Frogger" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                  </div>

                  <p>
                    For my initial project, I made a ninja themed version of the classic Frogger game. I used HTML for the structure, CSS for styling, and JavaScript for the functionality. It&apos;s a simple game, but it showcases what I could get done after only 4 weeks of learning HTML, CSS and JavaScript.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="project-container">
                  <div className="info-centered">
                    <h3>Project 2: Heroes and Villains</h3>
                    <p>Paired-project</p>
                    <p>
                      Links: <a href="https://superherosearch.netlify.app/"  target="_blank" rel="noreferrer">Heroes and Villains</a>, <a href="https://github.com/Jerrellbb/Heroes-and-Villains" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                  </div>

                  <p>
                    I teamed up for a quick two-day project, building the &quot;Heroes and Villains&quot; app. We used React for the look, MongoDB to handle data, and Cloudinary for images. Together, we tackled challenges by coding side by side and we connected to a third-party API, enabling the seamless retrieval of information on 731 heroes and villains.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="project-container">
                  <div className="info-centered">
                    <h3>Project 3: Legends Of The Turf</h3>
                    <p>Group of three</p>
                    <p>
                      Links: <a href="https://legends-of-the-turf-657a9862baae.herokuapp.com/" target="_blank" rel="noreferrer">Legends of The Turf</a>, <a href="https://github.com/Jerrellbb/legends-of-the-turf" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                  </div>

                  <p>
                    Completed the third General Assembly project, &quot;Legends of the Turf,&quot; a collaborative effort within a one-week timeframe. This Premier League fantasy football app features user registration, login, and team management capabilities. Utilizing React on the front end for a responsive user interface and Express on the back end with a MongoDB database, the project showcases proficiency in full-stack development, emphasizing effective teamwork.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="project-container">
                  <div className="info-centered">
                    <h3>Project 4: TechFolio</h3>
                    <p>Solo Project</p>
                    <p>
                      Links: <a href="https://techfolio-aa1cce7a2132.herokuapp.com/" target="_blank" rel="noreferrer">TechFolio</a>, <a href="https://github.com/Jerrellbb/Techfoliohub" target="_blank" rel="noreferrer">GitHub</a>
                    </p>
                  </div>

                  <p>
                    Techfolio was a week-long project and was the last project from my General Assembly course, representing my proficiency in full-stack development. This web application integrates a Python Django API with Django REST Framework, to establish a back-end connected to a Postgres database. On the front end, a visually striking React-based interface enhances user experience, making it not only functional but also aesthetically impressive.
                  </p>
                </div>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
    </>
  )
}
