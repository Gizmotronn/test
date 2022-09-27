import Link from 'next/link'
import styled from '@emotion/styled'
import PreRevealGlobe from './PreRevealGlobe'

const GoToMintButton = (props) => {
  const { eligibleToMint } = props

  return (
    <>
      <Link href='/mint' passHref>
        <a target='_blank' rel='noopener noreferrer'>
          <Button type='button' mint={eligibleToMint}>
            <PreRevealGlobe mint={eligibleToMint} />
          </Button>
        </a>
      </Link>
    </>
  )
}

export default GoToMintButton

const Button = styled.button`
  ${'' /* background: red; */}
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.mint ? 'pointer' : 'not-allowed')};
  ${
    '' /* width: 100%;
  height: 100%; */
  }
  background: inherit;
`
