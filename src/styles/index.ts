import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem auto;
`
export const MainContainer = styled.main`
  padding: 0 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Input = styled.input`
  padding: 0.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
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
