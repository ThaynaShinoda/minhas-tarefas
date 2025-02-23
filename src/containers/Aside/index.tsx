import { CardFilter } from '../../components/CardFilter'
import * as S from './styles'

export function Aside() {
  return (
    <S.Aside>
      <div>
        <S.Input type="text" name="" id="" placeholder="Buscar" />
        <S.Filters>
          <CardFilter active label="pendentes" counter={1} />
          <CardFilter label="concluídas" counter={2} />
          <CardFilter label="urgentes" counter={3} />
          <CardFilter label="importantes" counter={4} />
          <CardFilter label="normal" counter={5} />
          <CardFilter label="todas" counter={10} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
