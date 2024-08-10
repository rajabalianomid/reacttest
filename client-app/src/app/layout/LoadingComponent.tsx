import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
    inverted?: boolean,
    content?: string
}

function LoadingComponent({ inverted = true, content = "loading..." }: Props) {
    return (
        <Dimmer active={true} inverted={inverted} >
            <Loader content={content}></Loader>
        </Dimmer>
    )
}

export default LoadingComponent;