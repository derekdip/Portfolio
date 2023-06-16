import { startingPalette,PaletteContext } from '@styles/paletteContext';
import {render} from '@testing-library/react'
export default function customRender(args:any){
    return render(
        <PaletteContext.Provider value={startingPalette}>
                {args}
        </PaletteContext.Provider>
    )
}