import React from 'react'
import { Container, Grid, TextField, Button,TextareaAutosize} from '@material-ui/core'

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
            style={{ minHeight: '40vh' }}
            xs={12}
            >
              
                <TextareaAutosize
                    placeholder="Enter description"
                    maxRows={20}
                    multiline
                    style={{ width: "100%" }}
                />
             
          </Grid>
              <Grid item xs={1}>
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
            <Grid item xs={1}>
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