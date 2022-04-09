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
          <Block>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={'MLF PORTUGAL'} src="https://shorturl.at/drQRZ" />
              <img src="https://shorturl.at/drQRZ" alt="" height={20} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem
                onClick={handleClose}
              >{`https://mlf.portugalbasstrail.pt/ficheiros/anglers/filipe_1616362389.jpg`}</MenuItem>
              <MenuItem onClick={() => navigate('/')}>Logout</MenuItem>
            </Menu>
          </Block>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
