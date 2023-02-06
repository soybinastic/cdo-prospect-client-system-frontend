
import { Box, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, CircularProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Dashboard } from '@mui/icons-material'
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled'
import AddIcon from '@mui/icons-material/Add'

import { Link, Outlet } from 'react-router-dom'
import { 
  ExpandLess, 
  ExpandMore, 
  PermIdentityRounded, 
  PlaylistAddCheckCircleRounded,
  VillaOutlined } from '@mui/icons-material'
import AgentNavbar from '../../components/agent/AgentNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../features/profile/profileSlice'
import keys from '../../constants/keys'

function Agent() {
    const agent = JSON.parse(localStorage.getItem(keys.profileKey))
    const dispatch = useDispatch()
    const { isLoading, profileData, isSuccess } = useSelector(state => state.profile)
    const [showSidenav, setShowSidenav] = useState(false);

  const [listItem, setListItem] = useState({
    name : '',
    collapse : false
  })
  const [prevListItem, setPrevListItem] = useState(null)
  // const { name, collapse } = listItem;
//   const dispatch = useDispatch()
//   const { sideNavShow } = useSelector((state) => state.admin)
  // console.log(profileData)
  useEffect(() => {
    dispatch(getProfile({ type : 'agent' }))
  }, [dispatch])

  const onCloseSideNav = () => {
    setShowSidenav(false);
  }

  const handleSideNavShow = () => {
    setShowSidenav(!showSidenav);
  }

  const onExpandList = (currentListItem) => {

    setListItem({ name : currentListItem })
    if(currentListItem === prevListItem){
      console.log(listItem.collapse)
      setListItem({ name : currentListItem, collapse : listItem.name === currentListItem ? !listItem.collapse : (!listItem.collapse ? true : false) })
    }else{
      if(prevListItem){
        setListItem({ name : prevListItem, collapse : false })
      }
      setListItem({ name : currentListItem, collapse : true })
    }

    setPrevListItem(currentListItem);
  }

  if(isLoading || !agent){
    return <div className='flex justify-center items-center py-32'>
        <CircularProgress color='primary'/>
    </div>
}

  return <>
    <AgentNavbar handleSideNav={handleSideNavShow}/>
    <Drawer
        variant='persistent'
        anchor='left'
        className='drawer'
        open={showSidenav}
        >
        <Box display="flex" flexDirection="column">
           <Box display="flex" justifyContent="flex-end" padding="1rem">
              <IconButton edge="end" color='inherit' onClick={() => { onCloseSideNav() }}>
                  <CloseIcon/>
              </IconButton>
           </Box>
           <Box display="flex" flexDirection="column" padding="0.5rem" justifyContent="center" alignItems="center">
              <img src={agent.profile.profileImageLink} className='w-[10rem] h-[10rem] rounded-full' alt=''/>
              <h3 className='text-sm text-gray-700 font-semibold mt-3 uppercase'>{agent.profile.firstName} {agent.profile.lastName}</h3>
           </Box>
        </Box>
        <Divider/>
        <List>
          <ListItemButton>
              <ListItemIcon>
                <Dashboard/>
              </ListItemIcon>
              <ListItemText primary='Dashboard'/>
              {/* <p>Dashboard</p> */}
          </ListItemButton>
        </List>
        <Link to={'/agent/clients'}>
            <List>
            <ListItemButton>
                <ListItemIcon>
                    <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Clients'/>
                {/* <p>Dashboard</p> */}
            </ListItemButton>
            </List>
        </Link>
        <Link to={'/agent/client-records'}>
            <List>
            <ListItemButton>
                <ListItemIcon>
                    <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Client Records'/>
                {/* <p>Dashboard</p> */}
            </ListItemButton>
            </List>
        </Link>
        {/* <List>
            <ListItem button onClick={() => {
              onExpandList('agentinfo')
            }}>
                <ListItemIcon><PermIdentityRounded/></ListItemIcon>
                <ListItemText primary={"Agent Information"}/>
                { (listItem.name === 'agentinfo' && listItem.collapse) ? <ExpandLess/> : <ExpandMore/>  }
            </ListItem>
            <Collapse
              component="li"
              in={ listItem.name === 'agentinfo' && listItem.collapse }
              timeout="auto"
              unmountOnExit
              >
                <Link to={'/admin/add-agent'}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon><AddIcon/></ListItemIcon>
                      <ListItemText primary="Add Agent"/>
                    </ListItem>
                  </List>
                </Link>
                <Link to={'/admin/agents'}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon><PlaylistAddCheckCircleRounded/></ListItemIcon>
                      <ListItemText primary="All Agents"/>
                    </ListItem>
                  </List>
                </Link>
            </Collapse>
        </List> */}
        
        <Link to={'/agent/requirements-submission'}>
          <List>
            <ListItemButton>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Requirements Submission'/>
                {/* <p>Dashboard</p> */}
            </ListItemButton>
          </List>
        </Link>
    </Drawer>
    <Outlet/>
  </>
}

export default Agent