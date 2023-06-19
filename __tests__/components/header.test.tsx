import Header  from '@components/header';
import customRender from '@jestHelpers/customRender';
import {checkAndGetComponent} from '@jestHelpers/simpleReusableTests'
import "@testing-library/jest-dom/extend-expect"
describe('Header component', () => {
    test('Title Button Renders, displays, works',async()=>{
        const {findByTestId} = customRender(<Header></Header>);
        const Title=await checkAndGetComponent({findByTestId,id:"title-link"})
        expect(Title).toHaveTextContent('Derek P')
    })
    test('Resume Button Renders, displays, works',async()=>{
        const {findByTestId} = customRender(<Header></Header>);
        const Resume=await checkAndGetComponent({findByTestId,id:"resume-link"})
        expect(Resume).toHaveTextContent('Resume')
    })
    test('Contact Button Renders, displays, works',async()=>{
        const {findByTestId} = customRender(<Header></Header>);
        const Contact=await checkAndGetComponent({findByTestId,id:"contact-link"})
        expect(Contact).toHaveTextContent('Contact')
    })
  });