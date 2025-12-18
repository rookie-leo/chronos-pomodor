import raposa from './Heading.module.css'

export function Heading(props) {
    return <h1 className={raposa.heading}>{props.children}</h1>
}