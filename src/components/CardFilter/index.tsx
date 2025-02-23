import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  label: string
}

export function CardFilter({ active, counter, label }: Props) {
  return (
    <S.Card active={active}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}
