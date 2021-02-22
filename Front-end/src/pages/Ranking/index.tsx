import { Container, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TableComponent from "../../components/Table";
import Axios from 'axios';

const Ranking = (props: any) => {
const [state,setState] = useState({characters:[]});


    const useStyles = makeStyles({
        container: {
            height: "90vh"
        },
        innerContainer: {
            '& > div:nth-child(1)': {
                height: "2vh"
            }
        }
    });

    useEffect(() => {
        console.log("test");
        const fetchData = async () => {
            const { data } = await Axios.get(`${process.env.REACT_APP_MSLANCER_BASE_URL}/characters`);
            console.log(data);
            setState({...state,characters:data})
        }

        fetchData();
    }, [])

    function createData(rank, image, name, job, level) {
        return { rank, image, name, job, level };
    }

    const data = [
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
        createData('1', 'image', 'Magikarp', 'Magician', 50),
    ]

    const { innerContainer, container } = useStyles();
    return (
        <Container disableGutters maxWidth={false} className={container} style={{minHeight:"90vh",height:"100%"}}>
            <Grid container justify="center" className={innerContainer}>
                <Grid item md={12}></Grid>
                <Grid item style={{ border: "0px solid red" }} md={6}>

                    <TableComponent data={state.characters} headers={['Name', 'Job', 'Level', 'exp']} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Ranking;
