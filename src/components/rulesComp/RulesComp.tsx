import * as s from './RulesComp.styles'

interface props {
    ruleNumber: number,
    heading: string
    text: string
}

const RulesComponent = (props: props) => {
    return (
        <s.Row>
            <s.FrameNumber>
                <s.FrameInner>
                    <s.RuleNumber>{props.ruleNumber}</s.RuleNumber>
                </s.FrameInner>
            </s.FrameNumber>
            <s.FrameRules>
                <s.FrameInner>
                    <s.Heading>{props.heading}</s.Heading>
                    <s.Text>{props.text}</s.Text>
                </s.FrameInner>
            </s.FrameRules>
        </s.Row>
    )
}

export default RulesComponent