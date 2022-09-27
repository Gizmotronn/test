import Wallet from './Wallet'
import Audio from './Audio'

export default function HeaderNav(props) {
  const { route, windowSize } = props

  const { width, height } = windowSize

  return (
    <>
      {width > 767 && height > 551 && <Wallet windowSize={windowSize} />}

      {/* Always show the Audio button because we always show the Intro Globe regardless of the viewport size */}
      <nav>
        <Audio route={route} />
      </nav>
    </>
  )
}
