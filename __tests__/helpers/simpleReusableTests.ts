import { Matcher, MatcherOptions, waitForOptions } from "@testing-library/react"

interface checkAndGetComponentArgs{
    findByTestId:(id: Matcher, options?: MatcherOptions | undefined, waitForElementOptions?: waitForOptions | undefined) => Promise<HTMLElement>
    id: string
}
async function checkAndGetComponent({findByTestId,id}:checkAndGetComponentArgs){
        let component=await findByTestId(id)
        expect(component).not.toBe(undefined)
        return component;
}
export {checkAndGetComponent}
