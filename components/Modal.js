import { useContext, useState } from 'react'
import Portal from './Portal'
import { AudioContext } from '../contexts/AudioContext'
import IntroGlobe from './IntroGlobe'

export default function Modal(props) {
  const [open, setOpen] = useState(props.showModal)

  const { route } = props

  const [, setAudioActive] = useContext(AudioContext)

  const handleClick = () => {
    setOpen((current) => !current)
    setAudioActive(true)
  }

  return (
    <>
      {route === '/' && open && (
        <Portal selector='#modal'>
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {/* <div
                style={{
                  width: '30%',
                  backgroundColor: '#ffffff',
                }}
              > */}
              <button
                onClick={handleClick}
                type='button'
                style={{ background: 'inherit', padding: 0, border: 'none', cursor: 'pointer' }}
              >
                <IntroGlobe />
              </button>
            </div>
          </div>
          {/* </div> */}
        </Portal>
      )}
    </>
  )
}
