import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface Palette{
    primary:string,
    secondary:string,
    tertiary:string,
    quaternary:string,
    background:string
}
export interface PaletteContextInterface{
    Palette:Palette
    SetPalette:Dispatch<SetStateAction<Palette>>
}
export const startingPalette:Palette={
    primary: '#274574',
    secondary: '#5397BD',
    tertiary: '#6F707A',
    quaternary: '#201A21',
    background: '#D6DADC',
}
export const PaletteContext=createContext<PaletteContextInterface>({Palette:startingPalette,SetPalette:()=>{}});
export const GetPaletteContext=()=>{
    return useContext<PaletteContextInterface>(PaletteContext).Palette
}
export const SetPaletteContext=()=>{
    return useContext<PaletteContextInterface>(PaletteContext).SetPalette
}
