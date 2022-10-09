import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
// import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize'
import AudioProvider from '../contexts/AudioContext'
import IntroModal from '../components/Intro/IntroModal'
import CurtainCanvas from '../components/Curtain/CurtainCanvas'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/fonts.css'

// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider } = configureChains(
  [chain.polygon],
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
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const appRoute = router.route

  const size = useWindowSize()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <AudioProvider>
          <IntroModal showModal={true} route={appRoute} />
          {/* <CurtainCanvas showModal={true} route='/' /> */}
          <Layout windowSize={size}>
            <Component {...pageProps} windowSize={size} />
          </Layout>
        </AudioProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
