import styled from 'styled-components'

type CardProps = {
  $active: boolean
}

export const Card = styled.div<CardProps>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.$active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.$active ? '#ffffff' : '#fcfcfc')};
  color: ${(props) => (props.$active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`

export const Label = styled.span`
  font-size: 0.875rem;
`
