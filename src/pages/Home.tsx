import styles from '@styles/Home.module.css'
import Footer from '@components/footer'
import Header from '@components/header';
import { GetPaletteContext } from '@styles/paletteContext';
import ProjectCard from '@components/card';
import {projects} from '@helpers/projects'
export default function Home() {
  const selectedPalette = GetPaletteContext()
  const renderProjectCards=()=>{
    let projectCards:JSX.Element[]=[]
    for(let project of projects){
      projectCards.push( <ProjectCard project={project} style={{ width: '18rem', margin:'2vw' }}></ProjectCard>)
    } 
    return projectCards
  }
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
        <div className={styles.summary} style={{display:'flex',flex:1,  flexFlow: "wrap"}}>
          {renderProjectCards()}
        </div>
        <Footer/>
      </main>
  )
}
