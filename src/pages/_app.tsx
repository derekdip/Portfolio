import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/global.css'
import type { AppProps } from 'next/app'
import { PaletteContext, startingPalette } from '@styles/paletteContext';
import { useEffect, useState } from 'react';


export const metadata = {
  title: 'Derek P',
  description: `Derek's Web Portfolio`,
 
};

function MyApp({ Component, pageProps }:AppProps) {
  const [colorPalette,setColorPalette] = useState(startingPalette);
  useEffect(()=>{
    document.body.style.backgroundColor=colorPalette.background
    document.body.style.margin="0"
    document.body.style.padding="0"
    document.body.style.height='100%'
  },[colorPalette])
  useEffect(()=>{
    document.body.style.backgroundColor=colorPalette.background
  },[colorPalette])
  return (
    <>
      <Head>
        <title>Derek P</title>
        <meta name="description" content="Derek's Web Portfolio" />
        <link
          rel="icon"
          href="./favicon.svg"
          sizes='any'
        />
      </Head>
      <PaletteContext.Provider value={{Palette:colorPalette,SetPalette:setColorPalette}}>
          <Component {...pageProps} />
      </PaletteContext.Provider>
    </>
  );
}

export default MyApp;