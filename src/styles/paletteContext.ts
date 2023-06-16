import { createContext } from "react";

export interface Palette{
    name:string,
    primary:string,
    secondary:string,
    accent1:string,
    accent2:string,
    background:string
}
export const startingPalette:Palette={
    name: 'Sophisticated Neutrals',
    primary: '#274574',
    secondary: '#5397BD',
    accent1: '#6F707A',
    accent2: '#201A21',
    background: '#D6DADC',
}
export const PaletteContext=createContext<Palette>(startingPalette);