'use client'
import React, {  useEffect, useState, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css"; // Import bootstrap CSS
import "@styles/header.css"
import { Palette,PaletteContext } from 'app/page';
import DropDownItem from "@components/dropDownItem"
export default function Header(){
    const selectedPalette = useContext<Palette>(PaletteContext);
    useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <div className='header' style={{backgroundColor: selectedPalette.secondary}}>
            <nav className="navbar navbar-expand-lg  nav-container" style={{paddingTop:'10px',paddingBottom:'10px'}} >
                <div className="container-fluid" >
                    <h1>
                        <a className="nav-link" href="./" style={{color:selectedPalette.primary, marginRight:'10vw'}}>Derek P</a>
                    </h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:selectedPalette.secondary}}>
                        <span className="navbar-toggler-icon" style={{color:selectedPalette.secondary}}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <h2>
                                    <a className="nav-link active" aria-current="page" href="#" style={{color:selectedPalette.accent2}}>Home</a>
                                </h2>
                            </li>
                            <li className="nav-item">
                                <h2>
                                    <a className="nav-link active" aria-current="page" href="#" style={{color:selectedPalette.accent2}}>Resume</a>
                                </h2>
                            </li>
                            <li className="nav-item dropdown">
                                <h2 className="dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:selectedPalette.accent2, display:'flex', alignItems:'center', position:'relative'}}>
                                    <a className="nav-link active" aria-current="page" href="#" style={{color:selectedPalette.accent2}}>Projects</a>
                                </h2>
                            <ul className="dropdown-menu" style={{backgroundColor:selectedPalette.secondary, borderWidth:0}}>
                                <DropDownItem href="/cool-project1" text="Cool Project"></DropDownItem>
                                <DropDownItem href="/cool-project2" text="Cool Project"></DropDownItem>
                                <DropDownItem href="/cool-project3" text="Cool Project"></DropDownItem>
                                <li><hr className="dropdown-divider"></hr></li>
                                <DropDownItem href="/projects" text="View All"></DropDownItem>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <h2>
                                    <a className="nav-link active" aria-current="page" href="#" style={{color:selectedPalette.accent2}}>Contact</a>
                                </h2>
                            </li>
                        </ul>
                        </div>
                </div>
            </nav>
        </div>
      )
}




