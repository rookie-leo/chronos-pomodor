import raposa from './styles.module.css'

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {

    return <h1 className={raposa.heading}>{children}</h1>
}