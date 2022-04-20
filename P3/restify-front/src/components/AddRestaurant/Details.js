import React from "react";
import { Container, Grid, TextField, Button, Paper } from "@material-ui/core";
// import Image from '../images/details.jpg';

const Details = ({ nextStep, handleChange, state }) => {
    // for continue event listener
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    //   const styles = {
    //     paperContainer: {
    //         backgroundImage: `url(${Image})`
    //         }
    //     };
    
    const validate_name = (restaurantName) => {
        // check if name already exists from database 
        fetch("http://127.0.0.1:8000/restaurants/get/"+ restaurantName +"/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok){
                return false
            }
            else if (response.status == 404){
                return true
            }
            else{
                alert("Error: " + response.status)
                return false
            }
        })
        
       
    }
    return (
        // <Paper style={styles.paperContainer}>

        <Container component="main" maxWidth="xs">
            <div>
                <form>
                    <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: "100vh" }}
                    >
                        <Grid>
                            <TextField
                                placeholder="Your restaurant name"
                                label="Your restaurant name"
                                onChange={handleChange("name")}
                                defaultValue={state.name}
                                // variant="outlined"
                                autoComplete="email"
                                fullWidth
                            />

                            <TextField
                                placeholder="Your restaurant's address"
                                label="Your restaurant's address"
                                onChange={handleChange("address")}
                                defaultValue={state.address}
                                // variant="outlined"
                                autoComplete="address"
                                fullWidth
                                style={{ marginTop: "4em" }}
                            />

                            <TextField
                                placeholder="Postal code"
                                label="Postal code"
                                onChange={handleChange("postalCode")}
                                defaultValue={state.postalCode}
                                // variant="outlined"
                                autoComplete="postalCode"
                                fullWidth
                                style={{ marginTop: "4em" }}
                            />
                            <Button
                                onClick={Continue}
                                type="submit"
                                size="large"
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: "4em",
                                    position: "relative",
                                    left: "35%",
                                }}
                            >
                                Create your restaurant
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
        // </Paper>
    );
};

export default Details;
