import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Menu,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { Block } from '@components'

export const AppHeader: React.FC = () => {
  let navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ position: 'fixed', top: '0', width: '100%', zIndex: 10 }}>
      <AppBar position="static" style={{ backgroundColor: '#0f1331' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color={'red'}
          >
            MLF Portugal
          </Typography>
          <Block style={{ fontSize: '17px', fontWeight: 500 }}>
            Sair
            <LogoutIcon
              style={{ marginLeft: '5px', paddingLeft: '2px' }}
              fontSize={'small'}
            />
          </Block>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
