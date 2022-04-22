import React from "react";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from 'react-bootstrap/Container'
import RestaurantSideBar from "../RestaurantSideBar";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
    },
});

export default function EditMenu() {
    const classes = useStyles();
    return (
        <Container fluid>
            <div className="row p-0 flex-nowrap">
                <div
                    className="col-3"
                    style={{ paddingLeft: 0, backgroundColor: "#415973" }}
                >
                    <RestaurantSideBar />
                </div>
                <div className="col-9 md-auto">
                    <Grid
                        container
                        spacing={4}
                        className={classes.gridContainer}
                        justify="center"
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}
