import styled from '@emotion/styled'
import AudioButton from '../AudioButton'

export default function Audio(props) {
  const { route } = props

  return (
    <>
      {route === '/' && (
        <nav>
          <AudioContainer>
            <AudioButton />
          </AudioContainer>
        </nav>
      )}
    </>
  )
}

const AudioContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999;
`
