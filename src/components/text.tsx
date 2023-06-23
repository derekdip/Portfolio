interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children?: React.ReactNode|string;
    testId?:string;
    className?:string;
}
interface Anchor extends React.HTMLAttributes<HTMLAnchorElement>{
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
const A: React.FC<TextProps&Anchor> = ({ style, children, href, testId, className }) => {
    return(
        <a className={className} data-testid={testId} href={href} style={style}>
            {children}
        </a>
    )
};


export { H1, H2, H3, P, A };
export type { TextProps };
