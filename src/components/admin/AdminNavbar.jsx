
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sideNavToggle } from '../../features/admin/adminSlice'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { getAllNotifications } from '../../features/notification/notificationSlice'
import keys from '../../constants/keys'

function AdminNavbar() {
    const admin = JSON.parse(localStorage.getItem(keys.profileKey))
    const navigate = useNavigate()
    const { isError, isSuccess, notifications, notificationCount } = useSelector(state => state.notification)
  const { sideNavShow } = useSelector((state) => state.admin)
  const dispatch = useDispatch()
  const onSideNavToggle = () => {
    dispatch(sideNavToggle())
    // handleSideNav()
  }

//   useEffect(() => {
//     dispatch(getAllNotifications({ userId : admin.userId }))
//   }, [dispatch, admin])

  return <div className='sticky top-0 z-50'>
        <AppBar position='static'>
        {/* <Toolbar variant='dense'>
            
            
        </Toolbar> */}
        <div className='flex justify-between items-center px-4 py-2'>
            <div className='flex items-center'>
                <IconButton edge="start" color="inherit" aria-label='menu' sx={{ mr: 2 }} onClick={onSideNavToggle}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6' color="inherit">Admin Panel</Typography>
            </div>
            <div className='flex items-center'>
                <IconButton color='inherit' aria-label='notification' onClick={() => {
                    navigate('/admin/notification')
                }}>
                    <Badge badgeContent={notificationCount} color='success'>
                        <NotificationsNoneRoundedIcon/>
                    </Badge>
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

export default AdminNavbar