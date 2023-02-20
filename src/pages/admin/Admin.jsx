
import { Box, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import CloseIcon from '@mui/icons-material/Close'
import { Dashboard } from '@mui/icons-material'
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled'
import AddIcon from '@mui/icons-material/Add'
import { useSelector, useDispatch } from 'react-redux'
import { sideNavToggle } from '../../features/admin/adminSlice'
import { Link, Outlet } from 'react-router-dom'
import { 
  ExpandLess, 
  ExpandMore, 
  PermIdentityRounded, 
  PlaylistAddCheckCircleRounded,
  VillaOutlined } from '@mui/icons-material'
import { getProfile } from '../../features/profile/profileSlice'

function Admin() {
  const [listItem, setListItem] = useState({
    name : '',
    collapse : false
  })
  const [prevListItem, setPrevListItem] = useState(null)
  // const { name, collapse } = listItem;
  const dispatch = useDispatch()
  const { sideNavShow } = useSelector((state) => state.admin)

  const onCloseSideNav = () => {
    dispatch(sideNavToggle())
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
  useEffect(() => {
    dispatch(getProfile({ type : 'admin' })) 
  }, [dispatch])
  return <>
    <AdminNavbar/>
    <Drawer
        variant='persistent'
        anchor='left'
        className='drawer'
        open={sideNavShow}
        >
        <Box display="flex" flexDirection="column">
           <Box display="flex" justifyContent="flex-end" padding="1rem">
              <IconButton edge="end" color='inherit' onClick={() => { onCloseSideNav() }}>
                  <CloseIcon/>
              </IconButton>
           </Box>
           <Box display="flex" flexDirection="column" padding="0.5rem" justifyContent="center" alignItems="center">
              <img src='https://th.bing.com/th/id/R.f3f85e804c8c7edfe55343eee454b48d?rik=6l1mM9IYNNhx7g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_365985.png&ehk=QMmneHOhFggZV1ijjseGnxnRijC3ko29tcgy9eQh%2fUg%3d&risl=&pid=ImgRaw&r=0' width="40" height="40" alt=''/>
              <h3>John Doe</h3>
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
        <List>
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
        </List>
        <List>
            <ListItem button onClick={() => {
              onExpandList('property')
              // setListItem({ name : 'property', collapse : listItem.name === 'property' ? !listItem.collapse : (!listItem.collapse ? true : false) })
            }}>
                <ListItemIcon><VillaOutlined/></ListItemIcon>
                <ListItemText primary={"Property"}/>
                { (listItem.name === 'property' && listItem.collapse) ? <ExpandLess/> : <ExpandMore/>  }
            </ListItem>
            <Collapse
              component="li"
              in={ listItem.name === 'property' && listItem.collapse }
              timeout="auto"
              unmountOnExit
              >
                <Link to={'/admin/property-creation'}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon><AddIcon/></ListItemIcon>
                      <ListItemText primary="Add Property"/>
                    </ListItem>
                  </List>
                </Link>
                <Link to={'/admin/properties'}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon><PlaylistAddCheckCircleRounded/></ListItemIcon>
                      <ListItemText primary="List of Properties"/>
                    </ListItem>
                  </List>
                </Link>
            </Collapse>
        </List>
        <Link to={'/admin/appointments'}>
          <List>
            <ListItemButton>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Appointment List'/>
                {/* <p>Dashboard</p> */}
            </ListItemButton>
          </List>
        </Link>
        <Link to={'/admin/set-appointment'}>
          <List>
            <ListItemButton>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Set Appointment'/>
                {/* <p>Dashboard</p> */}
            </ListItemButton>
          </List>
        </Link>
        <Link to={'/admin/status-list'}>
          <List>
            <ListItemButton>
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary='Status List'/>
                {/* <p>Dashboard</p> */}
            </ListItemButton>
          </List>
        </Link>
    </Drawer>
    <Outlet/>
  </>
}

export default Admin