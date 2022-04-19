import React from 'react'
import { Container, Grid, TextField, Button } from '@material-ui/core'

function Description({nextStep, prevStep, handleChange, state}) {
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main">
      <div>
        <form>
          <Grid container spacing={1} 
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
              <Grid>
                <TextField
                    placeholder="MultiLine with rows: 2 and rowsMax: 4"
                    multiline
                    rows={2}
                    maxRows={4}
                    />
              </Grid>
          </Grid>
              <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{marginTop: '0'}}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
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
        </form>
      </div>
    </Container>
  )
}

export default Description