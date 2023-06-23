'use client'
import {  getPaletteContext } from '@styles/paletteContext';
import React,{ useEffect, useState, useRef } from 'react';
interface DropDownParams{
    href:string,
    text:string,
    testId:string
}
function DropDownItem(params:DropDownParams){
    const selectedPalette = getPaletteContext()
    const [dropDownItemStyle,setDropDownItemStyle]=useState({color:selectedPalette.accent2});
    function handleMouseEnter(params:any) {
        const itemStyle={backgroundColor:selectedPalette.primary, color:selectedPalette.accent1};
        setDropDownItemStyle(itemStyle);
    } 
    function handleMouseLeave(params:any){
        setDropDownItemStyle({color:selectedPalette.accent2});
    }
    useEffect(() => {
        //@ts-ignore
        import("bootstrap/dist/js/bootstrap");
      }, []);
    useEffect(()=>{
        setDropDownItemStyle({color:selectedPalette.accent2});
    },[selectedPalette])
    return(
        <li><a data-testid={params.testId} className="dropdown-item" href={params.href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={dropDownItemStyle}>{params.text}</a></li>
    )
}

const CustomToggle=React.forwardRef(
  ({ children, onClick }:React.HTMLAttributes<HTMLHeadingElement>,_ ) => {
    const selectedPalette = getPaletteContext()
    const ref = useRef<HTMLAnchorElement>(null);
    return (
  <a
    href=""
    ref={ref}
    onClick={(e:any) => {
      e.preventDefault();
      if(onClick){
        onClick(e);
      }
    }}
    style={{flex:1,display:'flex', alignItems:'center',color: selectedPalette.accent2}}
  >
    {children}
    &#x25bc;
  </a>
    )
});

const CustomMenu= React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }:React.HTMLAttributes<HTMLHeadingElement>,_ ) => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              child
          )}
        </ul>
      </div>
    );
  },
);
export {DropDownItem, CustomMenu, CustomToggle}