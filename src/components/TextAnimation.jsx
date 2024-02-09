import gsap from 'gsap'
import SplitTextJS from 'split-text-js'
import { useEffect } from 'react'


export default function TextAnimation() {
  useEffect(() => {
    // Animation logic using GSAP
    const titles = gsap.utils.toArray('.animation-wrapper h2')
    const tl = gsap.timeline({ repeat: -1 })

    titles.forEach(title => {
      const splitTitle = new SplitTextJS(title)

      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 20,
        rotateX: 90,
        stagger: 0.05
      }, '<')

        .to(splitTitle.chars, {
          opacity: 0,
          y: -20,
          rotateX: -90,
          stagger: 0.05
        }, '<1');
    });


    return () => {

    }

  }, [])

  return (
    <>
      <div className="parallax">
        <div className='h1-wrapper' >
          <h1> Jerrell Boyer <br />Junior Web Developer</h1>


          <div className="container-text">
            <div className="animation-wrapper">

              <h2>Frontend</h2>
              <h2>Backend</h2>
              <h2>JavaScript</h2>
              <h2>React</h2>
              <h2>Python</h2>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}