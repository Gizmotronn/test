import { useState, useEffect } from 'react'

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // The resize event handler
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 0)

    // Add event listener
    window.addEventListener('resize', debouncedHandleResize)

    // Call resize event handler immediately to update state with initial window size
    debouncedHandleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, []) // 👈 only run effect on mount

  return windowSize
}

export default useWindowSize
