import styled from 'styled-components'
import variables from '../../styles/variables'

type TagProps = {
  priority?: string
  status?: string
}

function returnBackgroundColor(props: TagProps) {
  if ('status' in props) {
    if (props.status === 'pendente') return variables['yellow-light']
    if (props.status === 'concluído') return variables.green
    return '#ccc'
  } else if ('priority' in props) {
    if (props.priority === 'urgente') return variables.red
    if (props.priority === 'importante') return variables.yellow
    return variables.blue
  }
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span<TagProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 1rem;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 0.875rem;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  resize: none;
  border: none;
  background: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`

export const Button = styled.button`
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 0.5rem;
`
export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`
export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
