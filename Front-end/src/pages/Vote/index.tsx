import { Container, Grid, makeStyles, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import box_bg from '../../assets/image/cc_bg.jpg';
import Axios from 'axios';

const Vote = (props: any) => {
    const [state, setState] = useState({ characters: [] });


    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
        container: {
            height: "90vh"
        }
    });

    useEffect(() => {
        console.log("test");
        const fetchData = async () => {
            const { data } = await Axios.get(`${process.env.REACT_APP_MSLANCER_BASE_URL}/characters`);
            console.log(data);
            setState({ ...state, characters: data })
        }

        fetchData();
    }, [])

    const { container, root } = useStyles();
    return (
        <Container disableGutters maxWidth={false} className={container} style={{ minHeight: "90vh", height: "100%" }}>
            <Grid container justify="center">
                <Grid item md={10} style={{ height: "10vh", border: "1px solid red" }}></Grid>
                <Grid item style={{ border: "0px solid red" }} md={8}>
                    <Paper className={root}>
                        <Tabs
                            value="0"
                            onChange={(event, newValue) => {
                            }}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Character Details" />
                            <Tab label="Vote NX" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Vote;
