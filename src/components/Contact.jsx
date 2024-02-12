
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {

  return (
    <>
      <div className="contact">
        <h3>Contact</h3>
        <div className="links">
          <a href="https://github.com/Jerrellbb" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub Profile"><FaGithub size={25} /></a>
          
          <a href="https://www.linkedin.com/in/jerrell-boyer" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn Profile"><FaLinkedin size={25} /></a>

          <a href="mailto:jerrellbb@yahoo.co.uk" target="_blank" rel="noreferrer" aria-label="Email" title="Send an Email"> <FaEnvelope size={25}/></a>
            
          
        </div>

      </div>


    </>

  )
}