import { useEffect } from 'react'
import Image_Slider from './3D_Image_Gallery_3/Image_Slider'
import Lenis from '@studio-freight/lenis'
import './App.css'
import SourceCode from './SourceCode_Button/SourceCode'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // lower = smoother
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


  return (
    <>
      <div className="fullSpace">
        <h3>Scroll Down</h3>
      </div>

      <Image_Slider />

      <div className="fullSpace">
        <SourceCode />
      </div>

    </>
  )
}

export default App
