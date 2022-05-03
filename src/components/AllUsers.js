import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Edit2, TickCircle, Slash } from 'iconsax-react';
import React, { useEffect, useState} from 'react'
import { getUsers, deleteUser } from '../api/api'
import {Link} from 'react-router-dom'

const AllUsers = () => {

    const [employees,setEmployees ] = useState([]);

    useEffect(() => {
        getAllUsers()        
    },[])

    const getAllUsers = async () => {
        const response = await getUsers();
        setEmployees(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

  return (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Full name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Birth Date</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
           {               
               employees.map(employee => (
                    <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>{employee.gender}</TableCell>
                        <TableCell>{employee.date}</TableCell>
                        <TableCell>{employee.nationality}</TableCell>
                        <TableCell>
                            <Link to={`/edit/${employee.id}`}>
                            <Edit2 />
                            </Link>
                            <Slash onClick={() => deleteUserData(employee.id)}/>
                            <TickCircle />
                        </TableCell>                        
                    </TableRow>
               ))               
           }
        </TableBody>
    </Table>
  )
}

export default AllUsers;