import React from 'react'
import { Container, Grid, TextField, Button, Paper } from '@material-ui/core'
// import Image from '../images/details.jpg'; 

const Details = ({nextStep, handleChange, state}) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  
//   const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Image})`
//         }
//     };

  return (
    // <Paper style={styles.paperContainer}>

        <Container  component="main" maxWidth="xs">
        <div >
            <form>
            <Grid container spacing={1} 
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
                >
                <Grid >
                    <TextField 
                    placeholder="restaurant name"
                    label="Enter the name of the restaurant"
                    onChange={handleChange('name')}
                    defaultValue={state.name}
                    // variant="outlined"
                    autoComplete="email"
                    fullWidth
                    />
    
                    <TextField 
                    placeholder="location"
                    label="Enter the location of the restaurant"
                    onChange={handleChange('location')}
                    defaultValue={state.location}
                    // variant="outlined"
                    autoComplete="location"
                    fullWidth
                    style={{marginTop: '5em'}}

                    />
                
                    <TextField 
                    placeholder="postal code"
                    label="Enter the postal code of the restaurant"
                    onChange={handleChange('postalCode')}
                    defaultValue={state.postalCode}
                    // variant="outlined"
                    autoComplete="postalCode"
                    fullWidth
                    style={{marginTop: '5em'}}
                    />
                    <Button 
                        onClick={ Continue }
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: '5em'}}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    // </Paper>
  )
}

export default Details