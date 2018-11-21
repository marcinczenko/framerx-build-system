import React from 'react'
import { CogitoConnector as _CogitoConnector } from '@cogitojs/cogito-react-ui'

export class CogitoConnector extends React.Component {
  render () {
    return (
      <_CogitoConnector {...this.props} />
    )
  }
}
