import React, { useRef, useEffect } from 'react'
import styles from '../styles/Chamber.module.css'

const Chamber = () => {
  const ref = useRef(null)

  useEffect(() => {
    const circleContainer = ref.current

    console.log('🚀 ~ file: Chamber.js ~ line 9 ~ useEffect ~ circleContainer', circleContainer)

    console.log('Circle.container: ', circleContainer.clientWidth)

    const circleElements = circleContainer.childNodes

    console.log('🚀 ~ file: Chamber.js ~ line 10 ~ useEffect ~ circleElements', circleElements)

    let angle = 360 - 90 // = 270
    let dangle = 360 / circleElements.length // = 72 with 5 circles

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i]

      console.log('🚀 ~ file: Chamber.js ~ line 21 ~ useEffect ~ circle', circle)

      angle += dangle // = 342

      circle.style.transform = `rotate(${angle}deg) translate(${
        circleContainer.clientWidth / 2
      }px) rotate(-${angle}deg)`
    }
  }, [])

  return (
    <div>
      <div style={chamberStyles.circleContainer} ref={ref}>
        <div style={chamberStyles.circle} />
        <div style={chamberStyles.circle} />
        <div style={chamberStyles.circle} />
        <div style={chamberStyles.circle} />
        <div style={chamberStyles.circle} />
      </div>
    </div>
  )
}

export default Chamber

const chamberStyles = {
  container: {
    // width: width,
    // height: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid blue',
    margin: '10px',
  },
  circleContainer: {
    position: 'relative',
    width: '550px',
    height: '550px',
    margin: 'calc(100px / 2 + 0px)',
    background: 'pink',
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '270px',
    height: '270px',
    margin: 'calc(-270px / 2)',
    borderRadius: '50%',
    background: 'yellow',
  },
}
