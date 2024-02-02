import GA from "../assets/images/galogo.png"

export default function experience() {


  return (
    <>

      <div className="experience-wrapper">
        <h3>Experience</h3>
        <div className="experience">
          <div className="ga-text">
            <p>As a Software Engineering Student at General Assembly, I completed a three-month remote programming bootcamp focused on web development and design.</p>

            <p>The curriculum included individual and group projects incorporating agile methodologies for creation and deployment.</p>

            <p><strong>Technologies used:</strong></p>
            <ul>
              <li><strong>Front-end:</strong> HTML, CSS, JavaScript (React), Bootstrap, NPM, Axios.</li>
              <li><strong>Back-end:</strong> JavaScript (Node, Express), Python, SQL (PostgreSQL), MongoDB, Django, Django Rest Framework.</li>
              <li><strong>Testing:</strong> Insomnia.</li>
              <li><strong>Tools:</strong> GitHub, Git, Pair Programming (Live Share), Team Communication (Slack), Project Management (Trello), VS Code.</li>
            </ul>

            <p>This diverse toolkit enabled me to navigate technical and collaborative aspects, contributing to a well-rounded skill set.</p>
          </div>

          <div className="ga-logo">
            <img src={GA} />
            <br />
            <p>(October 2023 - January 2024)</p>
          </div>
        </div>

      </div>
    </>
  )
}