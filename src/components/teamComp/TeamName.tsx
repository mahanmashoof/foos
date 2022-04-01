import * as s from './TeamName.styles'

interface props {
    text: string,
}

const SloganComponent = (props: props) => {
    return (
        <s.Frame>
            <s.FrameInner>
                <s.Text>{props.text}</s.Text>
            </s.FrameInner>
        </s.Frame>
    )
}

export default SloganComponent