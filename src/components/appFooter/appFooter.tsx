import React from 'react'
import Add from '@mui/icons-material/Add'
import List from '@mui/icons-material/List'
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material'

export const AppFooter: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

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
            label="Add Caputura"
            icon={<Add />}
          />
          <BottomNavigationAction
            color="white"
            label="Lista de Capturas"
            icon={<List />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
