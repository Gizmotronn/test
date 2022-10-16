import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { FountainContext } from '../../contexts/FountainContext'
import Text from '../Shared/Text'
import RadialButton from '../Shared/RadialButton'
import Portal from '../Shared/Portal'
import { COLORS } from '../../constants/constants'

export default function MintMessage(props) {
  const [dimensions] = useContext(FountainContext)
  const { width, height } = dimensions

  const [open, setOpen] = useState(props.showMessage)

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
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '15px',
              cursor: 'not-allowed',
              display: 'flex',
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
                height: dimensions.height,
                width: dimensions.width,
                margin: 'auto',
                borderRadius: '50%',
                background:
                  'radial-gradient(ellipse at center, #fff, transparent), radial-gradient(ellipse at center, #fff, transparent)',
                cursor: 'auto',
              }}
            >
              <WarningContainer>
                <WarningCopy padding={height <= 560 ? '55px 0px 5px 0px' : '30px 0px 30px 0px'}>
                  <Text color={COLORS.background}>You are now about to Forge a Monument.</Text>
                  <Text color={COLORS.background}>Monumental moments require a monumental sacrifice.</Text>
                  <Text color={COLORS.background}>
                    Continuing will combine the essence of all 5 Artifact NFTs, rebirthing them as a Monument.
                  </Text>
                  <Text color={COLORS.background}>
                    This will permanently remove one of each artifact NFT from your wallet.
                  </Text>
                  <Text color={COLORS.background}>Are you ready?</Text>
                </WarningCopy>
                <ButtonsContainer>
                  <RadialButton onClick={handleClose} type='button' width={height <= 560 ? '100px' : '120px'}>
                    I’m not ready
                  </RadialButton>

                  <RadialButton
                    // onClick={handleClick}
                    type='button'
                    cursor='not-allowed'
                    width={height <= 560 ? '100px' : '120px'}
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
  width: 70%;
  padding: ${(props) => props.padding};
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`
