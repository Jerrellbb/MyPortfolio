

export default function Nav() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({behaviour: 'smooth'})
    }
  }
  return(
    <div className="navbar">
      

      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('projects')}>Projects</button>
      
      <button onClick={() => scrollToSection('experience')}>Experience</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
      
    </div>
    
  )
}