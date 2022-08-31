import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Portal from './Portal'

export default function ForgeMessageModal(props) {
  const [open, setOpen] = useState(props.showModal)

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
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
              <WarningContainer>
                <WarningCopy>
                  <p>WARNING: All 5 NFTs will be burned to retrieve this new NFT.</p>
                </WarningCopy>
                <ButtonsContainer>
                  <ButtonContainer>
                    <CancelButton onClick={handleClose} type='button'>
                      Cancel
                    </CancelButton>
                  </ButtonContainer>
                  <ButtonContainer>
                    <ProceedButton
                      // onClick={handleClick}
                      type='button'
                    >
                      Proceed
                    </ProceedButton>
                  </ButtonContainer>
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
  background: yellow;
  width: 450px;
  height: 250px;
  border=radius: 8px;
`

const WarningCopy = styled.div`
  font-size: 24px;
  text-align: center;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonContainer = styled.div`
  margin: 20px;
`

const CancelButton = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid black;
  cursor: pointer;
`

const ProceedButton = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid black;
  cursor: not-allowed;
`
