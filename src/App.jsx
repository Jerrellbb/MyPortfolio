
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Projects from './components/Projects'
import TextAnimation from './components/TextAnimation'
import Experience from './components/experience'
import './App.css'







function App() {



  return (
    <>
      
        <div >
          <Nav />
          
        </div>
        <div>
          
          <TextAnimation />
        </div>
        <div className="content" >
          <div id="about">
            <About />
          </div>
          <div className="projects" id="projects">
            <Projects />
          </div>
          <div className="experience" id="experience">
            <Experience />
          </div>
          <div id="contact">
            <Contact />
          </div>

        </div>
      
    </>
  )
}

export default App
