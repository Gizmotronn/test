import { useState, useRef, useEffect } from 'react'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

export default function CurtainModal(props) {
  const [open, setOpen] = useState(props.showModal)
  const [curtain, setCurtain] = useState({
    currentIndex: 0,
    colors: ['red', 'black', 'grey', 'blue', 'green'],
  })

  const { route } = props

  const nextIndex = () => {
    const { colors, currentIndex } = curtain
    console.log('🚀 ~ file: CurtainModal.js ~ line 15 ~ nextIndex ~ colors', colors)
    if (currentIndex == colors.length - 1) {
      return setCurtain({ currentIndex: 0 })
    }

    return setCurtain({
      currentIndex: currentIndex + 1,
    })
  }

  const prevIndex = () => {
    const { colors, currentIndex } = curtain
    if (currentIndex == 0) {
      return setCurtain({
        currentIndex: colors.length - 1,
      })
    }

    return setCurtain({
      currentIndex: currentIndex - 1,
    })
  }

  return (
    <>
      {route === '/' && (
        <>
          <ReactScrollWheelHandler
            upHandler={prevIndex()}
            downHandler={nextIndex()}
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: curtain.colors[curtain.currentIndex],
              transition: 'background-color .4s ease-out',
            }}
          >
            <h1>SCROLL FOR CHANGE BACKGROUND COLOR</h1>
          </ReactScrollWheelHandler>
        </>
      )}
    </>
  )
}
