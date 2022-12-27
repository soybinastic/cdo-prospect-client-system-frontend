
import { Accordion, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import CloseIcon from '@mui/icons-material/Close'
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled'
import { ExpandLess, ExpandMore, PermIdentityRounded, PlaylistAddCheckCircleRounded } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import { useSelector, useDispatch } from 'react-redux'
import { sideNavToggle } from '../../features/admin/adminSlice'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
  const [listItem, setListItem] = useState({
    name : '',
    collapse : false
  })
  // const { name, collapse } = listItem;
  const dispatch = useDispatch()
  const { sideNavShow } = useSelector((state) => state.admin)

  const onCloseSideNav = () => {
    dispatch(sideNavToggle())
  }

  return <>
    <AdminNavbar/>
    <Drawer
        variant='persistent'
        anchor='left'
        className='drawer'
        open={sideNavShow}
        >
        <div className='m-5 drawer-header'>
            <Typography variant='p'>Admin Page</Typography>
            <IconButton edge="end" color='inherit' onClick={() => { onCloseSideNav() }}>
                <CloseIcon/>
            </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItemButton>
              <ListItemIcon>
                <AccessTimeFilled/>
              </ListItemIcon>
              <ListItemText primary='SAMPLE'/>
          </ListItemButton>
        </List>
        <List>
            <ListItem button onClick={() => {
              setListItem({ name : 'agentinfo', collapse : listItem.name === 'agentinfo' ? !listItem.collapse : (!listItem.collapse ? true : false) })
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
                <Link to={'/add-agent'}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon><AddIcon/></ListItemIcon>
                      <ListItemText primary="Add Agent"/>
                    </ListItem>
                  </List>
                </Link>
                <Link to={'/'}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon><PlaylistAddCheckCircleRounded/></ListItemIcon>
                      <ListItemText primary="All Agents"/>
                    </ListItem>
                  </List>
                </Link>
            </Collapse>
        </List>
    </Drawer>
    <Outlet/>
  </>
}

export default Admin