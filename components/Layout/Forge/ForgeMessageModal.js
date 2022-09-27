import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { Text, StandardButton } from '../../../shared/styles'
import Portal from '../../Portal'
import { COLORS } from '../../../constants'

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
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
                height: '100%',
                margin: 'auto',
              }}
            >
              <WarningContainer>
                <WarningCopy>
                  <Text size='24px' color='#000'>
                    You are now about to Forge a Monument.
                  </Text>
                  <Text size='24px' color='#000'>
                    Monumental moments require a monumental sacrifice.
                  </Text>
                  <Text size='24px' color='#000'>
                    Continuing will combine the essence of all 5 Artifact NFTs, rebirthing them as a Monument.
                  </Text>
                  <Text size='24px' color='#000'>
                    This will permanently remove one of each artifact NFT from your wallet.
                  </Text>
                  <Text size='24px' color='#000'>
                    Are you ready?
                  </Text>
                </WarningCopy>
                <ButtonsContainer>
                  <ButtonContainer>
                    <StandardButton onClick={handleClose} type='button'>
                      I’m not ready
                    </StandardButton>
                  </ButtonContainer>
                  <ButtonContainer>
                    <StandardButton
                      // onClick={handleClick}
                      type='button'
                      cursor='not-allowed'
                    >
                      Let’s Forge!
                    </StandardButton>
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
  padding: 30px 40px;
  border-radius: 12px;
  background-color: ${COLORS.accent};
  max-width: 722px;
  max-height: 506px;
`

const WarningCopy = styled.div`
  text-align: center;
  width: 90%;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`

const ButtonContainer = styled.div`
  margin: 20px;
`

// const CancelButton = styled.button`
//   background: #fff;
//   padding: 20px;
//   border: 1px solid black;
//   border-radius: 12px;
//   cursor: pointer;
// `

// const ProceedButton = styled.button`
//   background: #fff;
//   padding: 20px;
//   border: 1px solid black;
//   border-radius: 12px;
//   cursor: not-allowed;
// `
