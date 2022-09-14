import { useState, useEffect } from 'react'
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect } from 'wagmi'
import WalletConnect from './WalletConnect'
import Audio from './Audio'

export default function HeaderNav(props) {
  const { route } = props

  return (
    <>
      <WalletConnect />
      <Audio route={route} />
    </>
  )
}
