import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { FountainContext } from '../../../contexts/FountainContext'
import Text from '../../Shared/Text'
import RadialButton from '../../Shared/RadialButton'
import Portal from '../../Shared/Portal'
import { COLORS } from '../../../constants'

export default function ForgeMessageModal(props) {
  const [dimensions] = useContext(FountainContext)
  const { width, height } = dimensions

  const heightAdjust = height

  const [open, setOpen] = useState(props.showModal)

  const handleClose = () => {
    const { modalOpen } = props
    modalOpen(false)
    setOpen(false)
    console.log('clicked')
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
              padding: '15px',
              cursor: 'not-allowed',
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
                height: heightAdjust,
                width: dimensions.width,
                margin: 'auto',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                cursor: 'auto',
              }}
            >
              <WarningContainer>
                <WarningCopy>
                  <Text size='15px' color={COLORS.background}>
                    You are now about to Forge a Monument.
                  </Text>
                  <Text size='15px' color={COLORS.background}>
                    Monumental moments require a monumental sacrifice.
                  </Text>
                  <Text size='15px' color={COLORS.background}>
                    Continuing will combine the essence of all 5 Artifact NFTs, rebirthing them as a Monument.
                  </Text>
                  <Text size='15px' color={COLORS.background}>
                    This will permanently remove one of each artifact NFT from your wallet.
                  </Text>
                  <Text size='15px' color={COLORS.background}>
                    Are you ready?
                  </Text>
                </WarningCopy>
                <ButtonsContainer>
                  <RadialButton onClick={handleClose} type='button' size='15px'>
                    I’m not ready
                  </RadialButton>

                  <RadialButton
                    // onClick={handleClick}
                    type='button'
                    cursor='not-allowed'
                    size='15px'
                  >
                    Let’s Forge!
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
  ${'' /* width: 90%; */}
  padding: 40px 60px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`
