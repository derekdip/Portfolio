import styles from '@styles/buttons.module.css'
import { GetPaletteContext } from '@styles/paletteContext';
import { H3 } from './text';
interface clickable{
    testId:string
}
const PrimaryBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>&clickable> = ({ style, children, testId, onClick }) => {
    const selectedPalette = GetPaletteContext()
    return(
        <button data-testid={testId} className={styles.btn} onClick={onClick} style={{backgroundColor:selectedPalette.primary}}>
            <H3 style={{color:selectedPalette.secondary}}>{children}</H3>
        </button>
    )
};
const SecondaryBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>&clickable> = ({ style, children, testId, onClick }) => {
    const selectedPalette = GetPaletteContext()
    return(
        <button data-testid={testId} className={styles.btn} onClick={onClick} style={{backgroundColor:selectedPalette.secondary}}>
            <H3 style={{color:selectedPalette.primary}}>{children}</H3>
        </button>
    )
};
export {PrimaryBtn,SecondaryBtn}
