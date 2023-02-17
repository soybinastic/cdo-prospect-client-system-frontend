
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideNavToggle } from '../../features/admin/adminSlice'

function AdminNavbar() {

  const { sideNavShow } = useSelector((state) => state.admin)
  const dispatch = useDispatch()
  const onSideNavToggle = () => {
    dispatch(sideNavToggle())
  }
  return <AppBar position='static'>
    <Toolbar variant='dense'>
        <IconButton edge="start" color="inherit" aria-label='menu' sx={{ mr: 2 }} onClick={onSideNavToggle}>
            <MenuIcon/>
        </IconButton>
        <Typography variant='h6' color="inherit">Admin Panel</Typography>
        
    </Toolbar>
  </AppBar>
}

export default AdminNavbar