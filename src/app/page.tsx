"use client"
import styles from '@styles/page.module.css'
import Footer from '@components/footer'
import Header from '@components/header';
import { useState,createContext } from 'react';
export interface Palette{
  name:string,
  primary:string,
  secondary:string,
  accent1:string,
  accent2:string,
  background:string
}
const startingPalette:Palette={
  name: 'Sophisticated Neutrals',
  primary: '#274574',
  secondary: '#5397BD',
  accent1: '#6F707A',
  accent2: '#201A21',
  background: '#D6DADC',
}
export const PaletteContext=createContext<Palette>(startingPalette);
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
