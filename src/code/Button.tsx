import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Button as _Button, ValueWrapperEmotion, SemanticButton, CogitoConnector } from "../lib";

enum SIZE_OPTIONS {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg"
}

// Define type of property
interface Props {
  buttonType?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "toggle";
  size: SIZE_OPTIONS;
  title: string;
  // Width and height of the component when loaded in the canvas
  width: number;
  height: number;
}

interface State {
  semanticTitle?: string;
  openned: boolean;
}

export class Button extends React.Component<Props, State> {
  // Set default properties
  static defaultProps = {
    title: "Reset...",
    size: "md",
    buttonType: "default",
    width: 68,
    height: 28
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    title: { type: ControlType.String, title: "Title" },
    buttonType: {
      type: ControlType.Enum,
      options: ["default", "primary", "success", "warning", "danger", "toggle"],
      title: "Button Type"
    },
    size: {
      type: ControlType.SegmentedEnum,
      options: ["xs", "sm", "md", "lg"],
      title: "Size"
    }
  };

  constructor(props) {
    super(props)

    this.state = {
      semanticTitle: 'Nothing got clicked yet...',
      openned: false
    }
  }

  onSemanticClick() {
    this.setState({
      semanticTitle: 'Semanatic got clicked!'
    })
  }

  onResetClick() {
    this.setState({
      semanticTitle: 'Nothing got clicked yet...'
    })
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <ValueWrapperEmotion>{this.state.semanticTitle}</ValueWrapperEmotion>
        <_Button {...this.props} onClick={() => this.onResetClick()}>{this.props.title}</_Button>
        <SemanticButton title='Semantic Button' onClick={() => this.onSemanticClick()} />
        <CogitoConnector
          open={this.state.openned}
          onTrigger={() => this.setState({openned: true})}
          onClosed={() => this.setState({openned: false})}
          connectUrl='https://cogito.mobi' />
      </div>
    );
  }
}
