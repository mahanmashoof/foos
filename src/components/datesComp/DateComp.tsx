import * as s from './DateComp.styles'

interface props {
    date: string,
    heading: string
    text: string
}

const SloganComponent = (props: props) => {
    return (
        <s.Frame>
            <s.FrameInner>
                <s.Date>{props.date}</s.Date>
                <s.Heading>{props.heading}</s.Heading>
                <s.Text>{props.text}</s.Text>
            </s.FrameInner>
        </s.Frame>
    )
}

export default SloganComponent