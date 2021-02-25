import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Container, Grid } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Vote() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
    return (

        <Grid container justify="center" style={{ minHeight: "90vh" }}>
            <Grid container item md={10} style={{ height: "10vh", border: "0px solid gray" }}>
            </Grid>
            <Grid item md={6} className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        centered
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example">
                        <Tab icon={<GroupIcon />} label="Characters Details" />
                        <Tab icon={<AttachMoneyIcon />} label="Vote For NX" />
                        <Tab icon={<DirectionsRunIcon />} label="Unstuck" />

                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    ITem one
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container justify="center" style={{border:"0px solid red"}} spacing={6}>
                        <Grid item md={12} style={{border:"0px solid green" , textAlign:"center"}}><Typography variant="h5">Thank for voting</Typography></Grid>
                        <Grid container justify="center" item md={12}><Button startIcon={<ThumbUpAltIcon/>}size="large" variant="contained" color="primary">Vote</Button></Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Grid>


            <Grid item md={12} style={{ height: "50vh" }}></Grid>
        </Grid>
    );
}
