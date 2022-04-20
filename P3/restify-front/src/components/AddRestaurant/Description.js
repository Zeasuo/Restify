import React from "react";
import {
    Container,
    Grid,
    Typography,
    Button,
    TextareaAutosize,
} from "@material-ui/core";

function Description() {
    
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
                            style={{ width: "100%" }}
                        />
                    </Grid>

                    <Grid container direction="row" alignItems="center">
                        <Grid item sx={2}>
                            <Button
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
