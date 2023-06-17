'use client'
import React, {  useEffect, useContext } from 'react';
import styles from "@styles/Header.module.css"
import { Palette,PaletteContext } from '@styles/paletteContext';
import DropDownItem from "@components/dropDownItem"
export default function Header(){
    const selectedPalette = useContext<Palette>(PaletteContext);
    useEffect(() => {
        //@ts-ignore
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
            <div className={styles.header} style={{ backgroundColor: selectedPalette.secondary }}>
            <nav className={`navbar navbar-expand-lg  nav-container ${styles.navbarExpandCustom}`} style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <div className={`container-fluid ${styles.containerFluidCustom}`}>
                    <h1>
                        <a data-testid="title-link" className="nav-link" href="./hi" style={{ color: selectedPalette.primary, marginRight: '10vw' }}>Derek P</a>
                    </h1>
                    <button className="navbar-toggler" id='navbar-dropdown' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: selectedPalette.secondary }}>
                        <span className="navbar-toggler-icon" style={{ color: selectedPalette.secondary }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <h2>
                                    <a data-testid="home-link" className="nav-link active" aria-current="page" href="#" style={{ color: selectedPalette.accent2 }}>Home</a>
                                </h2>
                            </li>
                            <li className="nav-item">
                                <h2>
                                    <a data-testid="resume-link" className="nav-link active" aria-current="page" href="#" style={{ color: selectedPalette.accent2 }}>Resume</a>
                                </h2>
                            </li>
                            <li className="nav-item dropdown">
                                <h2 className={`dropdown-toggle ${styles.dropdownToggle}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: selectedPalette.accent2, display: 'flex', alignItems: 'center', position: 'relative' }}>
                                    <a data-testid="projects-link" className="nav-link active" aria-current="page" href="#" style={{ color: selectedPalette.accent2 }}>Projects</a>
                                </h2>
                                <ul className={`dropdown-menu ${styles.dropdownMenuShow}`} style={{ backgroundColor: selectedPalette.secondary, borderWidth: 0 }}>
                                    <DropDownItem id="cool-project-1" href="/cool-project1" text="Cool Project"></DropDownItem>
                                    <DropDownItem id="cool-project-2" href="/cool-project2" text="Cool Project"></DropDownItem>
                                    <DropDownItem id="cool-project-3" href="/cool-project3" text="Cool Project"></DropDownItem>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <DropDownItem id="cool-projects" href="/projects" text="View All"></DropDownItem>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <h2>
                                    <a data-testid="contact-link" className="nav-link active" aria-current="page" href="#" style={{ color: selectedPalette.accent2 }}>Contact</a>
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
      )
}




