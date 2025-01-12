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
  useEffect(() => {
    // Adjust the root font size based on the viewport width
    const setFontSize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        document.documentElement.style.fontSize = '16px'; // mobile
      } else if (width <= 768) {
        document.documentElement.style.fontSize = '18px'; // tablets
      } else {
        document.documentElement.style.fontSize = '22px'; // desktop
      }
    };

    // Run on initial load
    setFontSize();
    
    // Re-run when window size changes
    window.addEventListener('resize', setFontSize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', setFontSize);
    };
  }, []);
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;