'use client'
import React, {  useEffect } from 'react';
import styles from "@styles/Header.module.css"
import { GetPaletteContext } from '@styles/paletteContext';
import { CustomMenu, CustomToggle, DropDownItem } from "@components/dropDown"
import {Container, Dropdown, Nav, Navbar} from 'react-bootstrap'
import { H1, A, H2 } from './text';
import { Settings } from './settings';
export default function Header(){
    const selectedPalette = GetPaletteContext()
    useEffect(() => {
        //@ts-ignore
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
            <div  className={styles.header}>
            <Navbar style={{ backgroundColor: selectedPalette.secondary }}  expand="lg" >
                <Container>
                    <H1>
                        <A testId="title-link" href="./hi" style={{ color: selectedPalette.primary, marginRight: '10vw' }}>Derek P</A>
                    </H1>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <H2 className={styles.navItemCustom} >
                            <A testId="home-link" href="./#" style={{ color: selectedPalette.accent2 }}>Home</A>
                        </H2>
                        <H2 className={styles.navItemCustom}>
                            <A testId="resume-link" href="./#" style={{ color: selectedPalette.accent2 }}>Resume</A>
                        </H2> 
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <H2 className={styles.navItemCustom} style={{color: selectedPalette.accent2,paddingRight:'10px'}}>
                                        Projects
                                    </H2>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={CustomMenu} style={{backgroundColor:selectedPalette.secondary, border:0}}>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item1'/>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item2'/>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item3'/>
                                <DropDownItem href={'hi'} testId={'hi'} text='Item4'/>
                            </Dropdown.Menu>
                        </Dropdown>
                        <H2 className={styles.navItemCustom}>
                            <A testId="contact-link" href="./#" style={{ color: selectedPalette.accent2 }}>Contact</A>
                        </H2>
                        <Settings className={styles.navItemCustom} style={{marginTop:8, }}></Settings>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      )
}




