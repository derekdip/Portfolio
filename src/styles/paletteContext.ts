import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface Palette{
    name:string,
    primary:string,
    secondary:string,
    accent1:string,
    accent2:string,
    background:string
}
export interface PaletteContextInterface{
    Palette:Palette
    SetPalette:Dispatch<SetStateAction<Palette>>
}
export const startingPalette:Palette={
    name: 'Sophisticated Neutrals',
    primary: '#274574',
    secondary: '#5397BD',
    accent1: '#6F707A',
    accent2: '#201A21',
    background: '#D6DADC',
}
export const PaletteContext=createContext<PaletteContextInterface>({Palette:startingPalette,SetPalette:()=>{}});
export const getPaletteContext=()=>{
    return useContext<PaletteContextInterface>(PaletteContext).Palette
}
export const setPaletteContext=()=>{
    return useContext<PaletteContextInterface>(PaletteContext).SetPalette
}
