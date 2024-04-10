
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

      </div >
      <div className='bg'  >

        <TextAnimation />
      </div>
      <div className="content" >
        <div id="about">
          <About />
        </div>
        <div className="parallax-bg2">

        </div>
        <div id="projects">
          <Projects />
        </div>

        <div className="parallax-bg3"></div>

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
