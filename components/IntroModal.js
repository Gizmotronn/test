import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import Portal from './Portal'
import { AudioContext } from '../contexts/AudioContext'
import IntroGlobe from './IntroGlobe'

export default function Modal(props) {
  const [open, setOpen] = useState(props.showModal)
  const [removeModal, setRemoveModal] = useState(false)

  const { route } = props

  const [, setAudioActive] = useContext(AudioContext)

  const handleClick = () => {
    setOpen((current) => !current)
    setAudioActive(true)
  }

  const overlayAnimation = {
    isOpen: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 1,
        ease: 'easeOut',
        duration: 0.85,
      },
    },
  }
  const globeAnimation = {
    isOpen: {
      opacity: 1,
      scale: 1,
    },
    closed: {
      opacity: 0,
      scale: 0,
      transition: {
        delay: 0,
        ease: 'easeOut',
        duration: 1.5,
      },
    },
  }

  return (
    <>
      {route === '/' && !removeModal && (
        <Portal selector='#modal'>
          <motion.div
            variants={overlayAnimation}
            initial='isOpen'
            animate={open ? 'isOpen' : 'closed'}
            // initial={{ opacity: 1 }}
            // animate={{ opacity: 0 }}
            // transition={{ ease: 'easeOut', duration: 2 }}
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              zIndex: '999',
            }}
          >
            <motion.div
              variants={globeAnimation}
              initial='isOpen'
              animate={open ? 'isOpen' : 'closed'}
              onAnimationComplete={(definition) => {
                if (definition === 'closed') {
                  setRemoveModal(true)
                } else return
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <button
                onClick={handleClick}
                type='button'
                style={{ background: 'inherit', padding: 0, border: 'none', borderRadius: '50%' }}
              >
                <IntroGlobe />
              </button>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </>
  )
}
