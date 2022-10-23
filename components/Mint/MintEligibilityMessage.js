import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { FountainContext } from '../../contexts/FountainContext'

export default function MintEligibilityMessage(props) {
  const [dimensions] = useContext(FountainContext)

  const fountainHeight = dimensions ? dimensions.height : 0
  const fountainWidth = dimensions ? dimensions.width : 0

  const [open, setOpen] = useState(props.showMessage)

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
            zIndex: '999',
          }}
        >
          <WarningContainer>
            <WarningCopy>{props.message()}</WarningCopy>
          </WarningContainer>
        </motion.div>
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
`
