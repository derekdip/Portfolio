import { AnchorHTMLAttributes } from "react";

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode|string;
    testId?:string;
    className?:string;
}
interface Anchor extends AnchorHTMLAttributes<HTMLAnchorElement>{
    testId?:string
    href?:string
}
  
const H1: React.FC<TextProps> = ({ style, children,className }) => {
    return(
        <h1 className={className} style={style}>
            {children}
        </h1>
    )
};
  
const H2: React.FC<TextProps> = ({ style, children, className }) => {
    return(
        <h2 className={className} style={style}>
            {children}
        </h2>
    )
};
const H3: React.FC<TextProps> = ({ style, children, className }) => {
    return(
        <h3 className={className} style={style}>
            {children}
        </h3>
    )
};
const P: React.FC<TextProps> = ({ style, children, className }) => {
    return(
        <p className={className} style={style}>
            {children}
        </p>
    )
};
const A: React.FC<Anchor> = ({ style, children, href, testId, className, download }) => {
    return(
        <a className={className} data-testid={testId} href={href} download={download} style={style}>
            {children}
        </a>
    )
};


export { H1, H2, H3, P, A };
export type { TextProps };
