import * as React from 'react'
import {
  AppBar,
  Box,
  Button,
  Menu,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import { useAuth } from '@hooks'

export const AppHeader: React.FC = () => {
  const { signed, Login, Logout } = useAuth()

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  async function handleLogOut() {
    await Logout()
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMainMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#0f1331' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMainMenu}
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
          {signed ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
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
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
