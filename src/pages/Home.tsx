import styles from '@styles/Home.module.css'
import Footer from '@components/footer'
import Header from '@components/header';
import { PaletteContextInterface, PaletteContext } from '@styles/paletteContext';
import { useContext } from 'react';
export default function Home() {
  const selectedPalette = useContext<PaletteContextInterface>(PaletteContext).Palette;
    return (
      <main className={styles.main}>
        <Header/>
        <p className={styles.summary} style={{color:selectedPalette.tertiary}}>
        As a motivated and passionate student in my third year of university,
        I bring a combination of academic knowledge and real-world experience.
        Having previously worked at a clean tech startup, I have gained valuable
        insights into sustainable technologies and their impact on the environment. 
        Now, I am eagerly seeking an opportunity to join a meaningful cause and 
        collaborate with a great team that shares my vision of making a positive 
        difference. With a focus on continuous learning and a drive to contribute 
        to innovative projects, I am excited to showcase my skills and dedication 
        through my portfolio.
        </p>
        <Footer/>
      </main>
  )
}
