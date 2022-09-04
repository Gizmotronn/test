import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='preload'
          href='/fonts/ABCWhyteInktrapVariable.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <div id='modal'></div>
        <NextScript />
      </body>
    </Html>
  )
}
