import {  GetPaletteContext } from '@styles/paletteContext';
import React,{ useState, useRef } from 'react';
interface DropDownParams{
    href:string,
    text:string,
    testId:string
}
function DropDownItem(params:DropDownParams){
    const selectedPalette = GetPaletteContext()
    const [dropDownItemStyle,setDropDownItemStyle]=useState({color:selectedPalette.quaternary});
    function handleMouseEnter(params?:any) {
        const itemStyle={backgroundColor:selectedPalette.secondary, color:selectedPalette.tertiary};
        setDropDownItemStyle(itemStyle);
    } 
    function handleMouseLeave(params?:any){
        setDropDownItemStyle({color:selectedPalette.quaternary});
    }
    return(
        <li><a data-testid={params.testId} className="dropdown-item" href={params.href} onClick={()=>{ //makes it look consistent across mobile
          handleMouseEnter()
          handleMouseLeave()
      }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={dropDownItemStyle}>{params.text}</a></li>
    )
}

// eslint-disable-next-line react/display-name
const CustomToggle=React.forwardRef(
  ({ children, onClick }:React.HTMLAttributes<HTMLHeadingElement>,_ ) => {
    const selectedPalette = GetPaletteContext()
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
    style={{flex:1,display:'flex', alignItems:'center',color: selectedPalette.quaternary}}
  >
    {children}
    &#x25bc;
  </a>
    )
});

// eslint-disable-next-line react/display-name
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