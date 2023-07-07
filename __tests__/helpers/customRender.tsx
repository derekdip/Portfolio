import { startingPalette,PaletteContext, Palette } from '@styles/paletteContext';
import {render} from '@testing-library/react'
import { Dispatch, SetStateAction } from 'react';
export default function customRender(args:any){
    return render(
        <PaletteContext.Provider value={{Palette:startingPalette,SetPalette:()=>{}}}>
                {args}
        </PaletteContext.Provider>
    )
}