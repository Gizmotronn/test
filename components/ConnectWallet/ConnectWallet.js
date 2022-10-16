import styled from '@emotion/styled'
import WalletGlobe from '../Layout/Wallet/WalletGlobe'

const ConnectWallet = (props) => {
  const { walletConnected, connect, account } = props

  return (
    <>
      <Button
        onClick={walletConnected ? account : connect}
        type='button'
        // onClick={walletConnected ? disconnect : connect}
      >
        <WalletGlobe walletConnected={walletConnected} />
      </Button>
    </>
  )
}

export default ConnectWallet

const Button = styled.button`
  background: inherit;
  padding: 0;
  border: none;
  cursor: pointer;
  clip-path: circle(50%);
`
