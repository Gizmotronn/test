import '@rainbow-me/rainbowkit/styles.css'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
// import { infuraProvider } from 'wagmi/providers/infura'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { MoralisProvider } from 'react-moralis'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize'
import AudioProvider from '../contexts/AudioContext'
import IntroModal from '../components/Intro/IntroModal'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/fonts.css'

// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const { chains, provider, webSocketProvider } = configureChains(
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
  webSocketProvider,
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const appRoute = router.route

  const size = useWindowSize()

  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <RainbowKitProvider chains={chains}>
          <AudioProvider>
            {/* <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}> */}
            <IntroModal showModal={true} route={appRoute} />
            <Layout windowSize={size}>
              <Component {...pageProps} windowSize={size} />
            </Layout>
            {/* </MoralisProvider> */}
          </AudioProvider>
        </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export default MyApp
