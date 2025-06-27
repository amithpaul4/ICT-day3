import { Navigation } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Submission = () => {
  var [inp,setInp] = useState({name:"",age:"",course:"",place:""});
  const inputHandler = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
    console.log(inp);
  };
  var navigate=useNavigate()
  const submitHandler = ()=>{
    axios.post("http://localhost:3005/",inp)
    .then((res)=>{
      console.log(res)
      alert(res.data)
      navigate('/view')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
        <Typography variant='h3'>Welcome to student portal form</Typography>
        <br/>
        
      <TextField id="standard-basic" label="Name" variant="standard" name='name'
      value={inp.name} 
      onChange={inputHandler}/>
      <br/>
       <TextField id="standard-basic" label="AGE" variant="standard" type='number' name="age"
       value={inp.age} onChange={inputHandler} />
          <br/>
        <TextField id="standard-basic" label="COURCE" variant="standard" name='course' 
        value={inp.course}
        onChange={inputHandler}/>
        <br/>
        <TextField id="standard-basic" label="PLACE" variant="standard" name="place"
        value={inp.place}
        onChange={inputHandler}/>
        <br/>
        <br/>
        <Button variant='contained' onClick={submitHandler}>ADD</Button>

    </div>
  )
}

export default Submission
