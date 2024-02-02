
import { FaReact, FaPython, FaGithub, FaJsSquare, FaGit, FaNodeJs, FaSass, FaCss3Alt, FaBootstrap, FaHtml5 } from 'react-icons/fa';
import { SiMongodb, SiDjango, SiInsomnia, SiVite, SiExpress, SiAxios, SiJsonwebtokens, SiPostgresql, SiMysql } from 'react-icons/si';
import { TbTablePlus } from "react-icons/tb";

export default function About() {

  return (
    <>
      <div className="about" id="section">
        <h3>About</h3>
        <section className="box1">
          <div className="bio">
            <p>
              I am an adaptable professional transitioning from private security to web development, combining a friendly attitude with strong dedication. My journey into full-stack web development began with an intensive three-month software engineering course at General Assembly. With a foundation in effective communication, teamwork, and dependable leadership, I bring a unique set of skills to the tech realm.
            </p>
            <p>
              Fueled by my passion for gaming and technology, I channel creativity and motivation into crafting visually appealing and user-friendly interfaces. I&apos;m good at solving problems and enjoy working with others. I&apos;m dedicated to making things better for users by using my technical skills and paying attention to details. I&apos;m a reliable and friendly team member who&apos;s always ready to contribute.
            </p>
          </div>


          <div className="skill-icons">
            <div className="left-section">
              <div><p>Languages</p>
                <FaHtml5 size={25} />
                <FaJsSquare size={25} />
                <FaCss3Alt size={25} />
                <FaPython size={25} /></div>

              <div><p>Frontend Frameworks and Libraries</p>
                <FaReact size={25} />
                <FaSass size={25} />
                <FaBootstrap size={25} />
                <SiVite size={25} /></div>

              <div><p>Backend Frameworks</p>
                <FaNodeJs size={25} />
                <SiDjango size={25} />
                <SiExpress size={25} /></div>
            </div>

            <div className="right-section">
              <div><p>Databases</p>
                <SiMongodb size={25} />
                <SiPostgresql size={25} />
                <SiMysql size={25} /></div>

              <div><p>API and Networking</p>
                <SiAxios size={25} /></div>

              <div><p>Version Control and Collaboration</p>
                <FaGit size={25} />
                <FaGithub size={25} /></div>

              <div><p>Authentication</p>
                <SiJsonwebtokens size={25} /></div>

              <div><p>Tools and Utilities</p>
                <SiInsomnia size={25} />
                <TbTablePlus size={25} /></div>
            </div>
          </div>

        </section >


      </div >


    </>
  )
}