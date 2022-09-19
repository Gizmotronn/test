import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import WalletConnect from './WalletConnect'
import Audio from './Audio'

export default function HeaderNav(props) {
  const { route, windowSize } = props

  const { width, height } = windowSize

  return (
    <>
      {width > 767 && height > 551 && <WalletConnect windowSize={windowSize} />}
      <Audio route={route} />
    </>
  )
}
