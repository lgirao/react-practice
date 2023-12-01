import { useState } from 'react';

// Material UI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function MaterialUi() {
    const [value, setValue] = useState(3);

    const [email, setEmail] = useState("");
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h1>Rating Demo</h1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <hr></hr>
            <div style={{marginTop: "20px"}}>
                <h1>Buttons</h1>
                <Stack spacing={2} direction="row">
                  <Button variant="text" size="small">Text</Button>
                  <Button variant="contained" size="medium" color="secondary">Contained</Button>
                  <Button variant="outlined" size="large" color="error">Outlined</Button>
                </Stack>
            </div>
            <hr></hr>
            <div style={{marginTop: "20px"}}>
                <h1>Forms</h1>
                <p>Email is: {email}</p>
                <TextField 
                    id="outlined-basic" 
                    label="Email Address" 
                    variant="outlined" 
                    placeholder="name@email.com"
                    value={email}
                    onChange={updateEmail}
                />
            </div>
            <hr></hr>
            <div style={{marginTop: "20px"}}>
                <h1>Box Demo</h1>
                <Box 
                    sx={{
                        width: 300,
                        height: 300,
                        background: "red"
                    }}
                >
                </Box>
            </div>
        </div>
    );
}

export default MaterialUi;