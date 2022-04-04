import React from 'react'
import List from '@mui/icons-material/FormatListBulleted'
import Add from '@mui/icons-material/AddCircle'
import Apps from '@mui/icons-material/Apps'
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction'
import { BottomNavigation, Box, Paper, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: white;
  &.Mui-selected {
    color: red;
  }
`)

export const AppFooter: React.FC = () => {
  let navigate = useNavigate()
  const [value, setValue] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  const onLink = (href: any) => {
    navigate(href)
  }

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          style={{ backgroundColor: 'rgb(15, 19, 49)' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            color="white"
            label="Dashboard"
            icon={<List />}
            onClick={() => onLink('/dashboard')}
          />
          <BottomNavigationAction
            color="white"
            label="Add Caputura"
            icon={<Add />}
            onClick={() => onLink('/insertCatch')}
          />

          <BottomNavigationAction
            color="white"
            label="Lista de Capturas"
            icon={<Apps />}
            onClick={() => onLink('/listCatches')}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
