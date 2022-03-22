import * as s from './GossipComp.styles'

interface props {
    imgUrl: string,
    heading: string
    text: string
}

const GossipComponent = (props: props) => {
    return (
        <s.Frame>
            <s.FrameInner>
                <s.Image alt='' src={props.imgUrl} />
                <div style={{ padding: '16px 20px 20px' }}>
                    <s.Heading>{props.heading}</s.Heading>
                    <s.Text>{props.text}</s.Text>
                </div>
            </s.FrameInner>
        </s.Frame>
    )
}

export default GossipComponent