import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import GlobePlayer from './Shared/GlobePlayer'
import Text from './Shared/Text'

const ForgeGlobe = ({ forge, width, height }) => {
  // const [isActive, setIsActive] = useState(forge)

  // const [videoSource, setVideoSource] = useState('')

  // useEffect(() => {
  //   const readyToForge = isActive
  //   if (readyToForge) {
  //     setVideoSource('/videos/Forge/ACTIVE_Colour_400px.mp4')
  //   } else {
  //     setVideoSource('/videos/Shared/Black_INACTIVEGLOBE_400px.mp4')
  //   }
  // }, [isActive])

  return (
    <GlobePlayer width={width} height={height}>
      <source src='/videos/Forge/ACTIVE_Colour_400px.mp4' type='video/mp4' />
      <MessageContainer>
        <Text size='12px'>Sorry, your browser does not support embedded videos.</Text>
      </MessageContainer>
    </GlobePlayer>
  )
}

export default ForgeGlobe

const MessageContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`
