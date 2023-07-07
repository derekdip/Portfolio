import { Form } from "react-bootstrap";
import { H3 } from "./text";
import { GetPaletteContext } from "@styles/paletteContext";
import { useState } from "react";
interface Input{
    title:string
    startingColor:string
    setColor:Function
}
const ColorInput: React.FC<React.HTMLAttributes<HTMLElement>&Input> = ({title,startingColor,setColor}) => {
    const selectedPalette = GetPaletteContext()
    const [textVal,setTextVal]=useState<string>(startingColor)
    return(
        <>
        <H3 style={{color:selectedPalette.tertiary}}>{title}</H3>
                        <Form.Control type="color" style={{color:selectedPalette.quaternary,backgroundColor:selectedPalette.background}} onChange={(e)=>{
                            setTextVal(e.target.value)
                            setColor(e.target.value)
                            }} maxLength={7} placeholder="Enter hex #" value={textVal}/>
        </>
    )
};

export{ColorInput} 