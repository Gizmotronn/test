import '@rainbow-me/rainbowkit/styles.css'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
// import { infuraProvider } from 'wagmi/providers/infura'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { MoralisProvider } from 'react-moralis'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize'
import AudioProvider from '../contexts/AudioContext'
import IntroModal from '../components/Intro/IntroModal'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/fonts.css'

// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [publicProvider()]
  // [infuraProvider({ infuraId }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'BricktOrigins',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const appRoute = router.route

  const size = useWindowSize()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <MoralisProvider initializeOnMount={false}>
          <AudioProvider>
            <IntroModal showModal={true} route={appRoute} />
            <Layout windowSize={size}>
              <Component {...pageProps} windowSize={size} />
            </Layout>
          </AudioProvider>
        </MoralisProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
