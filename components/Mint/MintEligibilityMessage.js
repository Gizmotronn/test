import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { FountainContext } from '../../contexts/FountainContext'
import RadialButton from '../Shared/RadialButton'
import Portal from '../Shared/Portal'

export default function MintEligibilityMessage(props) {
  const [dimensions] = useContext(FountainContext)

  const fountainHeight = dimensions ? dimensions.height : 0
  const fountainWidth = dimensions ? dimensions.width : 0

  const [open, setOpen] = useState(props.showMessage)

  // 👇 Close Modal
  const handleClose = () => {
    const { modalOpen } = props
    modalOpen(false)
    setOpen(false)
  }

  const overlayAnimation = {
    isClosed: {
      opacity: 0,
    },
    opened: {
      opacity: 1,
      transition: {
        delay: 0,
        ease: 'linear',
        duration: 0.35,
      },
    },
  }
  const warningContainerAnimation = {
    isClosed: {
      opacity: 0,
      scale: 0,
    },
    opened: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0,
        ease: 'linear',
        duration: 0.35,
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
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              cursor: 'not-allowed',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              variants={warningContainerAnimation}
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
                height: fountainHeight,
                width: fountainWidth,
                borderRadius: '50%',
                background:
                  'radial-gradient(ellipse at center, #fff, transparent), radial-gradient(ellipse at center, #fff, transparent)',
                cursor: 'auto',
                margin: '7.5px',
                position: 'absolute',
                left: `${props.x}px`,
              }}
            >
              <WarningContainer>
                <WarningCopy padding={fountainHeight <= 560 ? '55px 0px 5px 0px' : '30px 0px 30px 0px'}>
                  {props.message()}
                </WarningCopy>
                <ButtonsContainer>
                  <RadialButton onClick={handleClose} type='button' width={fountainHeight <= 560 ? '100px' : '120px'}>
                    Close
                  </RadialButton>
                </ButtonsContainer>
              </WarningContainer>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </>
  )
}

const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WarningCopy = styled.div`
  text-align: center;
  width: 70%;
  padding: ${(props) => props.padding};
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`
