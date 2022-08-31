import { useState } from 'react'
import { motion } from 'framer-motion'
import Portal from './Portal'
import IntroGlobe from './IntroGlobe'

export default function ForgeMessageModal(props) {
  const [open, setOpen] = useState(props.showModal)
  const [removeModal, setRemoveModal] = useState(false)

  const handleClick = () => {
    setOpen((current) => !current)
  }

  const overlayAnimation = {
    isClosed: {
      opacity: 0,
    },
    opened: {
      opacity: 1,
      transition: {
        delay: 1,
        ease: 'easeIn',
        duration: 1,
      },
    },
  }
  const globeAnimation = {
    isClosed: {
      opacity: 0,
      scale: 0,
    },
    opened: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        ease: 'easeIn',
        duration: 2,
      },
    },
  }

  return (
    <>
      {open && (
        <Portal selector='#modal'>
          <motion.div
            variants={overlayAnimation}
            initial='isClosed'
            animate={open ? 'opened' : 'isClosed'}
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
              backgroundColor: 'rgba(0, 0, 0, 0.51)',
            }}
          >
            <motion.div
              variants={globeAnimation}
              initial='isClosed'
              animate={open ? 'opened' : 'isClosed'}
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
                style={{ background: 'inherit', padding: 0, border: 'none', cursor: 'pointer' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'yellow',
                    width: '450px',
                    height: '250px',
                    borderRadius: '8px',
                    padding: '20px',
                  }}
                >
                  <p style={{ fontSize: '24px' }}>WARNING: All 5 NFTs will be burned to retrieve this new NFT.</p>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </>
  )
}
