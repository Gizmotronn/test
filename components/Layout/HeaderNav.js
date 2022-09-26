import styled from '@emotion/styled'
import WalletConnect from './WalletConnect'
import Audio from './Audio'

export default function HeaderNav(props) {
  const { route, windowSize } = props

  const { width, height } = windowSize

  return (
    <>
      {width > 767 && height > 551 && <WalletConnect windowSize={windowSize} />}
      <nav>
        <Audio route={route} />
      </nav>
    </>
  )
}
