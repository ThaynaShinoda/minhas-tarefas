import { Aside } from '../../containers/Aside'
import { Formulario } from '../../containers/Formulario'

export function Cadastro() {
  return (
    <>
      <Aside showFilters={false} />
      <Formulario />
    </>
  )
}
