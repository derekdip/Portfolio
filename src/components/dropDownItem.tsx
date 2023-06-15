'use client'
import { Palette,PaletteContext } from 'app/page';
import { useContext, useEffect, useState } from 'react';
interface DropDownParams{
    href:string,
    text:string
}
export default function DropDownItem(params:DropDownParams){
    const selectedPalette = useContext<Palette>(PaletteContext);
    const [dropDownItemStyle,setDropDownItemStyle]=useState({color:selectedPalette.accent2});
    function handleMouseEnter(params:any) {
        const itemStyle={backgroundColor:selectedPalette.primary, color:selectedPalette.accent1};
        setDropDownItemStyle(itemStyle);
    } 
    function handleMouseLeave(params:any){
        setDropDownItemStyle({color:selectedPalette.accent2});
    }
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);
    useEffect(()=>{
        setDropDownItemStyle({color:selectedPalette.accent2});
    },[selectedPalette])
    return(
        <li><a className="dropdown-item" href={params.href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={dropDownItemStyle}>{params.text}</a></li>
    )
}