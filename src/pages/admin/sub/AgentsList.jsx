import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { PermIdentityOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getAgents } from '../../../features/profile/profileSlice'
import { reset } from '../../../features/profile/profileSlice'


const AgentsList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, isSuccess, errors, data, agents } = useSelector(state => state.profile)

    const onNavigate = (route) => {
        if(route){
            navigate(route)
        }
    }

    useEffect(() => {
        dispatch(getAgents())

        return () => {
            dispatch(reset())
        }
    }, [dispatch])

    if(isLoading){
        return <Box display="flex" justifyContent="center" alignItems="center" padding="2rem">
            <CircularProgress color="primary" size={30}/>
        </Box>
    }
  return <>
    <Box display="flex" flexDirection="column" padding="2rem">
        <Box display="flex" justifyContent="space-between" paddingBottom="0.5rem">
            <Typography variant="h6" component="p">List of Agents</Typography>
            <Button onClick={() => onNavigate('/admin/add-agent')} color="primary" variant="outlined" startIcon={<PermIdentityOutlined/>}>Insert new Agent</Button>
        </Box>
        <TableContainer component={Paper}>
            <Table arial-label='simple data'>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {agents?.map(agent => (
                        <TableRow key={agent.id}>
                            <TableCell align="left">{agent?.profile?.firstName}</TableCell>
                            <TableCell align="left">{agent?.profile?.lastName}</TableCell>
                            <TableCell align="left">{agent?.profile?.address}</TableCell>
                            <TableCell align="left">Active</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  </>
}

export default AgentsList