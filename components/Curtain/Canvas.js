import { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const Canvas = (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  return <CustomCanvas ref={canvasRef} {...props} />
}

export default Canvas

const CustomCanvas = styled.canvas`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1158px;
  maxwidth: 100vw;
  height: 770;
  maxheight: 100vh;
  ${'' /* backgroundcolor: yellow; */}
`
