
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {

  return (
    <>
      <div className="contact">
        <h3>Contact</h3>
        <div className="links">
          <a href='https://github.com/Jerrellbb'><FaGithub size={50}/></a>
          <br />
          <a href='https://www.linkedin.com/in/jerrell-boyer'><FaLinkedin size={50}/></a>
        </div>

      </div>


    </>

  )
}