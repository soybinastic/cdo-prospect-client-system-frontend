import { 
    Box, 
    Typography, 
    Button, 
    Table, 
    TableContainer, 
    TableHead, 
    TableRow,
    TableCell,
    TableBody,
    Paper, 
    CircularProgress} from '@mui/material'
import { PermIdentityOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProperties, reset } from '../../../features/property/propertySlice'

export const PropertiesList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, properties, isSuccess } = useSelector(state => state.property)
    const onNavigate = (route) => {
        navigate(route)
    }

    useEffect(() => {
        dispatch(getAllProperties())

        return () => {
            dispatch(reset())
        }
    }, [dispatch])

    if(isLoading){
        return <div className='flex justify-center items-center pt-28'>
            <CircularProgress color='primary' size={30}/>
        </div>
    }
  return (
    <div>
        <Box display="flex" flexDirection="column" padding="2rem">
            <Box display="flex" justifyContent="space-between" paddingBottom="0.5rem">
                <Typography variant="h6" component="p">List of Property</Typography>
                <Button onClick={() => onNavigate('/admin/property-creation')} color="primary" variant="outlined" startIcon={<PermIdentityOutlined/>}>CREATE PROPERTY</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table arial-label='simple data'>
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>PRICE</TableCell>
                            <TableCell>TYPE</TableCell>
                            <TableCell>STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {properties.map((property) => (
                            <TableRow key={property.id}>
                                <TableCell align="left">{property.name}</TableCell>
                                <TableCell align="left">{property.price}</TableCell>
                                <TableCell align="left">{property.propertyType.name}</TableCell>
                                <TableCell align="left">{property.available ? 'AVAILABLE' : 'NOT AVAILABLE'}</TableCell>
                                <TableCell align="center">
                                    <button onClick={() => navigate(`/admin/property-details/${property.id}`)} className='px-3 py-2 text-black bg-[#ffc108] shadow-sm rounded-md uppercase'>details</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </div>
  )
}
