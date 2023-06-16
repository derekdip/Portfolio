import DropDownItem  from '@components/dropDownItem';
import { rgbToHex } from '@jestHelpers/colors';
import customRender from '@jestHelpers/customRender';
import {checkAndGetComponent} from '@jestHelpers/simpleReusableTests'
import "@testing-library/jest-dom/extend-expect"
import { fireEvent } from '@testing-library/react';
import {startingPalette} from '@styles/paletteContext'
describe('DropDownItem component', () => {
    let currentBackgroundColor=null;
    test('Item Renders, displays, works',async()=>{
        const {findByTestId} = customRender(<DropDownItem href={'fancy-link'} text={'fancy-text'} id='fancy-item'></DropDownItem>)
        const dropDownItem=await checkAndGetComponent({findByTestId,id:"fancy-item"})
        expect(dropDownItem).toHaveTextContent('fancy-text')
        currentBackgroundColor=rgbToHex(dropDownItem.style.backgroundColor)
        expect(currentBackgroundColor).toBe(null)//parent background color
        fireEvent.mouseEnter(dropDownItem)
        currentBackgroundColor=rgbToHex(dropDownItem.style.backgroundColor)
        expect(currentBackgroundColor).toBe(startingPalette.primary)
        fireEvent.mouseLeave(dropDownItem)
        currentBackgroundColor=rgbToHex(dropDownItem.style.backgroundColor)
        expect(currentBackgroundColor).toBe(null)
    })
})