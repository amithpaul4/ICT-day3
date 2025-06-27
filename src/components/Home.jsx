import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  var [stu,setStu] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3005/")
    .then((res)=>{
       console.log(res)
       setStu(res.data)
    })
    .catch((err)=>{
      console.log(err)
    });

  },[]);
  return (
    <div>
      {/* Home,name,age,course,place */}
          <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Place</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {stu.map((vall,i)=>{
                        return(
                            <TableRow key={i}>
                            <TableCell>{vall.name}</TableCell>
                            <TableCell>{vall.age}</TableCell>
                            <TableCell>{vall.course}</TableCell>
                            <TableCell>{vall.place}</TableCell>
                            </TableRow>
                        )
                    })}
          
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home
