import React from 'react';
import styles from "@styles/Header.module.css"
import { GetPaletteContext } from '@styles/paletteContext';
import { CustomMenu, CustomToggle, DropDownItem } from "@components/dropDown"
import {Container, Dropdown, Nav, Navbar} from 'react-bootstrap'
import { H1, A, H2 } from './text';
import { Settings } from './settings';
import {projects} from '@helpers/projects'
export default function Header(){
    const selectedPalette = GetPaletteContext()
    const renderProjectItems=()=>{
        let projectItems:JSX.Element[]=[]
    for(let project of projects){
      projectItems.push( <DropDownItem href={project.localLink} testId={project.name} text={project.name}/>)
    } 
    return projectItems
    }
    return (
            <div  className={styles.header}>
            <Navbar style={{ backgroundColor: selectedPalette.primary }}  expand="lg" >
                <Container>
                    <H1>
                        <A testId="title-link" href="./Home" style={{ color: selectedPalette.secondary, marginRight: '10vw' }}>Derek P</A>
                    </H1>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <H2 className={styles.navItemCustom} >
                            <A testId="home-link" href="./Home" style={{ color: selectedPalette.quaternary }}>Home</A>
                        </H2>
                        <H2 className={styles.navItemCustom}>
                            <A testId="resume-link" href="/DerekResume.pdf" style={{ color: selectedPalette.quaternary }}>Resume</A>
                        </H2> 
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <H2 className={styles.navItemCustom} style={{color: selectedPalette.quaternary,paddingRight:'10px'}}>
                                        Projects
                                    </H2>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={CustomMenu} style={{backgroundColor:selectedPalette.primary, border:0}}>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item1'/>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item2'/>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item3'/>
                            </Dropdown.Menu>
                        </Dropdown>
                        <H2 className={styles.navItemCustom}>
                            <A testId="contact-link" href="./#" style={{ color: selectedPalette.quaternary }}>Contact</A>
                        </H2>
                        <Settings className={styles.navItemCustom} style={{marginTop:8, }}></Settings>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      )
}




