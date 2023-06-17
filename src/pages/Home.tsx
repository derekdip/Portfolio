"use client"
import styles from '@styles/page.module.css'
import Footer from '@components/footer'
import Header from '@components/header';
import { useState,createContext } from 'react';
import { startingPalette, PaletteContext } from '@styles/paletteContext';
export default function Home() {
  const [colorPalette,setColorPalette] = useState(startingPalette);
  return (
    <PaletteContext.Provider value={colorPalette}>
      <main className={styles.main} style={{backgroundColor:colorPalette.background}}>
        <Header></Header>
      </main>
    </PaletteContext.Provider>
  )
}
