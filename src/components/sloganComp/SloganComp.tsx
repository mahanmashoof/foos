import * as s from './SloganComp.styles'

interface props {
    upperText: string,
    lowerText: string
}

const SloganComponent = (props: props) => {
    return (
        <s.Frame>
            <s.FrameInner>
                <s.UpperText>{props.upperText}</s.UpperText>
                <s.LowerText>{props.lowerText}</s.LowerText>
            </s.FrameInner>
        </s.Frame>
    )
}

export default SloganComponent