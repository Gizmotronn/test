import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import HeaderNav from './HeaderNav'
import FooterNav from './FooterNav'

const Layout = ({ children }) => {
  const { data: account } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      <HeaderNav />
      <main
        style={{
          width: '100%',
          flex: '1 1 auto',
          bg: 'inherit',
        }}
      >
        {children}
      </main>
      <FooterNav />
    </div>
  )
}

export default Layout
