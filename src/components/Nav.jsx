
import logo from '../assets/images/my-logo.png'
export default function Nav() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (sectionId === 'top') {
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (section) {
      
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return(
    <div className="navbar">
      

      <button id="no-img" onClick={() => scrollToSection('about')}>About</button>
      <button id="no-img" onClick={() => scrollToSection('projects')}>Projects</button>

      <button  onClick={() => scrollToSection('top')}><img src={logo} style={{width: 40}}/></button>
      
      <button id="no-img" onClick={() => scrollToSection('experience')}>Experience</button>
      <button id="no-img" onClick={() => scrollToSection('contact')}>Contact</button>
      
    </div>
    
  )
}