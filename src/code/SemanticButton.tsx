import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from 'react-emotion'
import { SemanticButton as _SemanticButton } from "../lib";

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
})

// Define type of property
interface Props {
    title: string;
    onClick: () => void;
}

export class SemanticButton extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        title: "Click Me!",
        onClick: () => {}
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        title: { type: ControlType.String, title: "Title" },
    }

    render() {
        return (
            <Wrapper>
                <_SemanticButton title={this.props.title} onClick={() => this.props.onClick()} />
            </Wrapper>
        )
    }
}
