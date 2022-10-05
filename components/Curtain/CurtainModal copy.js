import { useState, useRef, useEffect } from 'react'
import Portal from '../Shared/Portal'
import Canvas from './Canvas'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

export default function CurtainModal(props) {
  const [open, setOpen] = useState(props.showModal)
  const [frameCount, setFrameCount] = useState(200)
  const [index, setIndex] = useState(0)
  // console.log('🚀 ~ file: CurtainModal.js ~ line 10 ~ CurtainModal ~ index', index)

  const { route } = props

  const ref = useRef()

  // 👇 PREVIOUS Index
  const prevIndex = () => {
    if (index === 0) {
      return
    }

    return setIndex(index - 1)
  }

  // 👇 NEXT Index
  const nextIndex = () => {
    if (index === frameCount) {
      return
    }

    return setIndex(index + 1)
  }

  const currentFrame = (index) =>
    `https://res.cloudinary.com/bricktorigins/image/upload/v1664857485/curtain/Curtain_c_1.${index
      .toString()
      .padStart(4, '0')}.png`

  // console.log('🚀 ~ file: CurtainModal.js ~ line 15 ~ CurtainModal ~ currentFrame', currentFrame(index))

  // 👇 Preload the images new network requests
  // const preloadImages = () => {
  //   for (let i = 1; i < frameCount; i++) {
  //     const img = new Image()
  //     img.src = currentFrame(i)
  //   }
  // }

  useEffect(() => {
    let canvas = ref.current
    let context = canvas.getContext('2d')

    // Create, load and draw the image
    const img = new Image()
    img.src = currentFrame(index)
    img.onload = function () {
      context.drawImage(img, 0, 0)
    }

    const updateImage = (index) => {
      img.src = currentFrame(index)
      context.drawImage(img, 0, 0)
    }

    // requestAnimationFrame(() => updateImage(index + 1))
  })

  // preloadImages()

  return (
    <>
      {route === '/' && (
        <>
          <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex}>
            <canvas
              ref={ref}
              width='1024'
              height='1024'
              style={{
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                // width: '100vw',
                // height: '100vh',
                // backgroundColor: 'yellow',
                zIndex: '999',
                // opacity: '0.5',
              }}
            />
          </ReactScrollWheelHandler>
        </>
      )}
    </>
  )
}
