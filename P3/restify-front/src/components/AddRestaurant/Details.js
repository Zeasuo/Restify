import React from 'react'
import { Container, Grid, TextField, Button } from '@material-ui/core'


const Details = ({nextStep, handleChange, state}) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <form>
          <Grid container spacing={1} 
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
              <Grid >
                <TextField 
                  placeholder="restaurant name"
                  label="Please enter the name of the restaurant"
                  onChange={handleChange('name')}
                  defaultValue={state.name}
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
  
                <TextField 
                  placeholder="location"
                  label="Please enter the location of the restaurant"
                  onChange={handleChange('location')}
                  defaultValue={state.location}
                  // variant="outlined"
                  autoComplete="location"
                  fullWidth
                  style={{marginTop: '5em'}}

                />
            
                <TextField 
                  placeholder="postal code"
                  label=" Please enter the postal code of the restaurant"
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
  )
}

export default Details