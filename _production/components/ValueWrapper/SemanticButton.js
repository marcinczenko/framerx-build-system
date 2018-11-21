import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

export const SemanticButton = ({ onClick, title }) => (
  <Button primary onClick={onClick}>{title}</Button>
)
