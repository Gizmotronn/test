import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ForgeGlobe from './ForgeGlobe'

const ForgeButton = (props) => {
  const router = useRouter()

  const { forge, size } = props

  return (
    <>
      <Button onClick={() => router.push('/forge')} type='button' forge={forge}>
        <ForgeGlobe forge={forge} size={size} />
      </Button>
    </>
  )
}

export default ForgeButton

const Button = styled.button`
  background: inherit;
  padding: 0;
  border: none;
  cursor: ${(props) => (props.forge ? 'pointer' : 'not-allowed')};
`
