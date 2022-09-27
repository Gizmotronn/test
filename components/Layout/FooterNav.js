import Forge from './Forge'

export default function FooterNav(props) {
  const { route, windowSize } = props

  return (
    <>
      <Forge route={route} windowSize={windowSize} />
    </>
  )
}
