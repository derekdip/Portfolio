import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/global.css'
import type { AppProps } from 'next/app'
import { PaletteContext, startingPalette } from '@styles/paletteContext';
import { useEffect, useState } from 'react';


export const metadata = {
  title: 'Derek P',
  description: 'Generated by create next app',
};

function MyApp({ Component, pageProps }:AppProps) {
  const [colorPalette,setColorPalette] = useState(startingPalette);
  useEffect(()=>{
    document.body.style.backgroundColor=colorPalette.background
    document.body.style.margin="0"
    document.body.style.padding="0"
    document.body.style.height='100%'
  },[])
  useEffect(()=>{
    document.body.style.backgroundColor=colorPalette.background
  },[colorPalette])
  return (
    <>
      <Head>
        <title>Derek P</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PaletteContext.Provider value={{Palette:colorPalette,SetPalette:setColorPalette}}>
          <Component {...pageProps} />
      </PaletteContext.Provider>
    </>
  );
}

export default MyApp;