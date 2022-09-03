import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { mq, breakpoints } from '../shared/styles'
import useWindowSize from '../hooks/useWindowSize'
import Chamber from './Chamber'

export default function ChamberController({ nftData, chamberSize, globeSize, globeMargin }) {
  const [toggle, setToggle] = useState(false)

  const size = useWindowSize()

  useEffect(() => {
    const currentSize = size.width

    breakpoints.map((bp) => {
      if (currentSize >= bp) {
        // console.log('xxxxxxxxxxxx ', bp, ' xxxxxxxxxxx')
        setToggle((current) => !current)
      } else return
    })
  }, [size])

  return (
    <>
      <ChamberContainer>
        <Chamber nftData={nftData} toggle={toggle} />
      </ChamberContainer>
    </>
  )
}

const ChamberContainer = styled.div`
  width: 50%;
  background: inherit;
`
