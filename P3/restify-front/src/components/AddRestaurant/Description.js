import React from "react";
import {
    Container,
    Grid,
    Typography,
    Button,
    TextareaAutosize,
} from "@material-ui/core";

function Description({ nextStep, prevStep, handleChange, state }) {
    // for continue event listener
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };

    return (
        <Container component="main">
            <div>
                <Typography component="h1" variant="h5">
                    Now, tell us about your restaurant
                </Typography>
                <form>
                    <Grid
                        container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        xs={11}
                    >
                        <TextareaAutosize
                            placeholder=""
                            minRows={20}
                            maxRows={20}
                            multiline
                            onChange={handleChange('description')}
                            style={{ width: "100%" }}
                        />
                    </Grid>

                    <Grid container direction="row" alignItems="center">
                        <Grid item sx={2}>
                            <Button
                                onClick={Previous}
                                type="submit"
                                width="10%"
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: "4em",
                                    marginRight: "32em",
                                }}
                            >
                                Previous
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button
                                onClick={Continue}
                                type="submit"
                                width="10%"
                                variant="contained"
                                color="primary"
                                style={{ marginTop: "4em", marginLeft: "32em" }}
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Description;
