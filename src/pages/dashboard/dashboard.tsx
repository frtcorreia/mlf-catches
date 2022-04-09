import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppContainer,
  AppFooter,
  Block,
  CatchCard,
  CatchCardProps,
} from '@components'
import { AppHeader } from 'components/appHeader'
import { Grid, MenuItem, Select } from '@mui/material'
import { api } from '@services'

export interface Competition {
  id?: number
  titulo?: string
  data_i?: Date
  data_f?: Date
  local?: string
  url_maps?: string
  imagem?: string
  id_tipo?: number
  status?: number
  arquivo?: number
  destaque?: number
  created_at?: Date
  valor?: number
  categoria?: number
  visivel_provas?: number
  tipo_classificacao?: string
}

const data: CatchCardProps[] = [
  {
    image: 'https://source.unsplash.com/random',
    status: 0,
  },
  {
    image: 'https://source.unsplash.com/random',
    status: 1,
  },
  {
    image: 'https://source.unsplash.com/random',
    status: 2,
  },
]

export const Dashboard: React.FC = () => {
  const [selected, setSelected] = React.useState(0)
  const [list, setList] = React.useState<Competition[]>([])
  let navigate = useNavigate()
  const handleChange = (event: any) => {
    console.log('handleChange', event.target.value)
    setSelected(event.target.value)
  }
  async function handleGetData() {
    try {
      const response = await api.get('/competition')
      setList(response.data.data)
    } catch (error) {
      console.log('GET competitions ERROR')
    }
  }

  React.useEffect(() => {
    handleGetData()
  }, [])

  const handleOnClickCard = () => {
    navigate(`/detailsCatch/1`)
  }

  return (
    <AppContainer>
      <AppHeader />
      <Block style={{ overflow: 'hidden' }}>
        <Block
          fixed
          style={{
            padding: '20px',
            zIndex: 9,
          }}
        >
          <Select
            displayEmpty
            value={selected}
            onChange={(value) => handleChange(value)}
            placeholder="Selecione uma prova"
            style={{
              background: 'white',
            }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {list.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.titulo}
              </MenuItem>
            ))}
          </Select>
        </Block>
        <Block
          style={{
            padding: '85px 20px 10px',
            height: 'calc(100vh - 123px)',
            overflow: 'scroll',
          }}
        >
          <Grid container justifyContent={'center'}>
            {data.map((item, i) => {
              return (
                <CatchCard
                  key={i}
                  image={item.image}
                  status={item.status}
                  onClick={handleOnClickCard}
                />
              )
            })}
          </Grid>
        </Block>
      </Block>

      <AppFooter />
    </AppContainer>
  )
}
