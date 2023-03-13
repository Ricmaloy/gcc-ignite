import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'filhote',
  },
  {
    label: 'Adulto',
    value: 'adulto',
  },
  {
    label: 'Idoso',
    value: 'idoso',
  },
]
const energyOptions = [
  {
    label: '01',
    value: 1,
  },
  {
    label: '02',
    value: 2,
  },
  {
    label: '03',
    value: 3,
  },
  {
    label: '04',
    value: 4,
  },
  {
    label: '05',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

export function Aside() {
  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input type="text" placeholder="Insira uma cidade" />
            <button>
              <img src={search} alt="ícone de lupa" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select name="age" label="Idade" options={ageOptions} />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
          />

          <Select name="size" label="Porte do animal" options={sizeOptions} />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
