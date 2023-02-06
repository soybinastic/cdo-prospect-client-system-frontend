
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideNavToggle } from '../../features/admin/adminSlice'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function AgentNavbar({ handleSideNav }) {

    const navigate = useNavigate()
  const { sideNavShow } = useSelector((state) => state.admin)
  const dispatch = useDispatch()
  const onSideNavToggle = () => {
    // dispatch(sideNavToggle())
    handleSideNav()
  }
  return <div className='sticky top-0 z-50'>
        <AppBar position='static'>
        {/* <Toolbar variant='dense'>
            
            
        </Toolbar> */}
        <div className='flex justify-between items-center px-4 py-2'>
            <div className='flex items-center'>
                <IconButton edge="start" color="inherit" aria-label='menu' sx={{ mr: 2 }} onClick={onSideNavToggle}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6' color="inherit">Agent</Typography>
            </div>
            <div className='flex items-center'>
                <IconButton color='inherit' aria-label='notification'>
                    <NotificationsNoneRoundedIcon/>
                </IconButton>
                <IconButton color='inherit' aria-label='logout' onClick={() => {
                    localStorage.clear()
                    navigate('/login')
                }}>
                    <LogoutRoundedIcon/>
                </IconButton>
            </div>
        </div>
    </AppBar>
  </div>
}

export default AgentNavbar