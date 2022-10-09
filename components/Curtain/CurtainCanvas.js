import { useState, useRef, useEffect } from 'react'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

export default function CurtainCanvas(props) {
  const ref = useRef()
  const [images, setImages] = useState([])
  // console.log('🚀 ~ file: CurtainCanvas.js ~ line 7 ~ CurtainCanvas ~ images', images)
  const [index, setIndex] = useState(0)
  console.log('🚀 ~ file: CurtainCanvas.js ~ line 9 ~ CurtainCanvas ~ index', index)

  const { route } = props

  const frameCount = 240
  const canvasWidth = 1600
  const canvasHeight = 1000

  // 👇 Get the current frame image
  // const getCurrentFrame = (index) =>
  //   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
  //     .toString()
  //     .padStart(4, '0')}.jpg`

  const getCurrentFrame = (index) =>
    `https://res.cloudinary.com/bricktorigins/image/upload/q_auto,f_auto/v1664857485/curtain/Please_Be_Seated.0001${index
      .toString()
      .padStart(3, '0')}.png`

  // 👇 Handle scroll / up arrow BACK
  const prevIndex = () => {
    if (index === 0) {
      return
    }

    return setIndex(index - 5)
  }

  // 👇 Handle scroll / down arrow FORWARD
  const nextIndex = () => {
    if (index === frameCount - 5) {
      return
    }

    return setIndex(index + 5)
  }

  // 👇 Render the CANVAS
  const renderCanvas = () => {
    const context = ref.current.getContext('2d')
    context.canvas.width = canvasWidth
    context.canvas.height = canvasHeight
  }

  useEffect(() => {
    // 👇 Loop over the frames and add them to the images array as state
    function preloadImages() {
      for (let i = 0; i <= frameCount - 1; i++) {
        const img = new Image()
        const imgSrc = getCurrentFrame(i)
        img.src = imgSrc
        setImages((prevImages) => [...prevImages, img])
      }
    }
    preloadImages()
    renderCanvas()
  }, [frameCount])

  useEffect(() => {
    if (!ref.current || images.length < 1) {
      return
    }

    const context = ref.current.getContext('2d')

    let requestId

    const render = () => {
      context.drawImage(images[index], 0, 0)
      requestId = requestAnimationFrame(render)
    }

    render()
    context.clearRect(0, 0, canvasWidth, canvasHeight) // Clear the canvas before the drawing the next image in the sequence

    return () => cancelAnimationFrame(requestId)
  }, [index, images])

  return (
    <>
      {route === '/' && (
        <>
          <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex} timeout={0}>
            <canvas
              ref={ref}
              width={canvasWidth}
              height={canvasHeight}
              style={{
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                // backgroundColor: 'yellow',
                zIndex: '999',
                // opacity: '0.7',
              }}
            />
          </ReactScrollWheelHandler>
        </>
      )}
    </>
  )
}