import { Container, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import TableComponent from "../../../components/Table";


const Ranking = (props: any) => {

    const useStyles = makeStyles({
        container: {
            height: "90vh"
        },
        innerContainer: {
            '& > div:nth-child(1)': {
                height: "20vh"
            }
        }
    });

    function createData(rank,image, name, job,level) {
        return { rank,image, name, job,level };
    }



    const data = [
        createData('1','image','Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image','Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image','Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image','Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),
        createData('1','image', 'Magikarp', 'Magician',50),

    ]


    const { innerContainer, container } = useStyles();

    console.log(data);
    return (
        <Container disableGutters maxWidth={false} className={container}>
            <Grid container justify="center" className={innerContainer}>
                <Grid item md={12}></Grid>
                <Grid item style={{ border: "0px solid red" }} md={6}>

                    <TableComponent data={data} headers={['Rank', 'Image','Name','Job','Level']}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Ranking;
