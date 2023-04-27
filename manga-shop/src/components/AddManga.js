import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, Typography }  from '@mui/material';


// export default function AddManga() {
const AddManga = () => {
  const [inputs, setInputs] = useState({
    name:'',
    author:'',
    description:'',
    price:'',
    image:''

  });
  return ( <form>
     <Box display="flex" 
          flexDirection="column"
          justifyContent="center"
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '60ch' },
        }}
      noValidate
      autoComplete="off"
    >
  
      <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="filled-basic" label="Author" variant="filled" />
      <TextField id="filled-basic" label="Description" variant="filled" />
      <TextField id="filled-basic" label="Price" variant="filled" />
      <TextField id="filled-basic" label="Image" variant="filled" />
      <Button type='submit'>Add more manga!</Button>
    </Box>




  </form>
  )
    
};
export default AddManga