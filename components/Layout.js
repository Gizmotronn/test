import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const { data: account } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div>
      <Navbar />
      <main className='flex-1'>{children}</main>
    </div>
  )
}

export default Layout
