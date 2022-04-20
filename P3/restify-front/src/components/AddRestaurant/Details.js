import React from "react";
import { useState } from "react";

import { Container, Grid, TextField, Button, Paper } from "@material-ui/core";
// import Image from '../images/details.jpg';

const Details = ({ nextStep, handleChange, state }) => {
    const [nameState, setName] = useState("");
    const [addressState, setAddress] = useState("");
    const [postalCodeState, setPostalCode] = useState("");
    const [nameNotification, setNameNotification] = useState(true);
    const [addressNotification, setAddressNotification] = useState(true);
    const [postalCodeNotification, setPostalCodeNotification] = useState(true);
    // for continue event listener
    const Continue = (e) => {
        e.preventDefault();
        if (nameState && addressState && postalCodeState) {
            var {restaurant_name, address, postal_code} =
                document.forms[1];
            const formData = new FormData();
            formData.append("restaurant_name", nameState);
            formData.append("address", addressState);
            formData.append("postal_code", postalCodeState);
            fetch("http://127.0.0.1:8000/restaurants/create/", {
                method: "POST",
                headers: {
                    "Authorization": "Token " + localStorage.getItem("restifyToken"),
                },
                body: formData,
            }).then((response) => {
                if (!response.ok) {
                    console.log(response)
                }
                else {
                    nextStep();
                }
            });
            
        } else {
            if (!nameState) {
                setNameNotification(false);
            }
            if (!addressState) {
                setAddressNotification(false);
            }
            if (!postalCodeState) {
                setPostalCodeNotification(false);
            }
        }
    };

    //   const styles = {
    //     paperContainer: {
    //         backgroundImage: `url(${Image})`
    //         }
    //     };

    const validate_name = (restaurantName) => {
        // check if name already exists from database
        fetch("http://127.0.0.1:8000/restaurants/get/" + restaurantName + "/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                setName("");
                setNameNotification(false);
            } else if (response.status == 404) {
                setName(restaurantName);
                setNameNotification(true);
            } else {
                alert("Error: " + response.status);
                setName("");
                setNameNotification(false);
            }
        });
    };

    const validate_address = (address) => {
        if (address.length > 0) {
            setAddress(address);
            setAddressNotification(true);
        } else {
            setAddress("");
            setAddressNotification(false);
        }
    };

    const validate_postal_code = (postalCode) => {
        if (postalCode.length > 0) {
            setPostalCode(postalCode);
            setPostalCodeNotification(true);
        } else {
            setPostalCode("");
            setPostalCodeNotification(false);
        }
    };

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
                                error={!nameNotification}
                                placeholder="Your restaurant name"
                                label="Your restaurant name"
                                onBlur={(e) => validate_name(e.target.value)}
                                autoComplete="email"
                                helperText={
                                    !nameNotification
                                        ? "A restaurant with this name already exists"
                                        : ""
                                }
                                fullWidth
                            />

                            <TextField
                                error={!addressNotification}
                                placeholder="Your restaurant's address"
                                label="Your restaurant's address"
                                onBlur={(e) => validate_address(e.target.value)}
                                autoComplete="address"
                                fullWidth
                                helperText={
                                    !addressNotification
                                        ? "Address cannot be empty"
                                        : ""
                                }
                                style={{ marginTop: "4em" }}
                            />

                            <TextField
                                error={!postalCodeNotification}
                                placeholder="Postal code"
                                label="Postal code"
                                onBlur={(e) =>
                                    validate_postal_code(e.target.value)
                                }
                                autoComplete="postalCode"
                                fullWidth
                                helperText={
                                    !postalCodeNotification
                                        ? "Postal code cannot be empty"
                                        : ""
                                }
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
