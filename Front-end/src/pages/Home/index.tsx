import React from 'react';
import { Grid, Button, makeStyles,Divider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Clock from 'react-live-clock';
import box_bg from '../../assets/image/cc_bg.jpg';
import announcements from '../../assets/image/announcements.png';
import style from './styles.module.css';
import Features from '../Feature';
const Home = (props: any) => {

    const useStyles = makeStyles({
        innerContainer: {
            '& > div': {
                marginLeft: "1.2%",//gap between items
                marginRight: "1.2%",//gap between items
                '& > div': {
                    boxShadow: '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)',
                    background: `#fff url(${box_bg})  left top no-repeat`,
                    padding: "4%",
                    borderRadius: "3px",
                    border: '6px solid #7db7c7'
                },

                '& > div:nth-child(1n+2)':
                {
                    marginTop: "10%"
                },
            }
        }
    });

    const { innerContainer } = useStyles();


    return (
        <React.Fragment>
            <Grid container style={{ minHeight: "90vh" }}>
                <Grid container item md={12} style={{ height: "30vh", border: "0px solid gray" }}>
                </Grid>
                <Grid container item style={{ border: "0px solid red", width: "100%" }} justify="center">
                    <Grid container style={{ border: "0px solid red" }} className={innerContainer} item md={10}> {/**inner container */}
                        <Grid container item md={3} style={{ border: "0px solid yellow" }}> {/**left column */}

                            <Grid item md={12}>

                                <Grid item md={12}>
                                    <h4 style={{ textAlign: "center" }}>Download Client</h4></Grid>
                                <Grid container item justify="center">
                                    <Button size="large" variant="contained" color="primary"> Downloads
                            </Button>
                                </Grid>
                            </Grid>

                            <Grid item md={12}>
                                <Grid item> Server Time</Grid>
                                <Grid item>
                                    <h4>
                                        <Clock
                                            format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
                                            ticking={true}
                                            timezone={'Asia/Singapore'} />
                                    </h4>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item md={5}>{/**middle column*/}
                            <Grid item md={12}>

                                <Grid item md={12} container justify="center" style={{ marginBottom: "2vh" }}><img src={announcements} alt="latest announcement"></img>
                                </Grid>
                                <hr></hr>
                                <Grid item md={12} style={{ border: "0px solid red" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum sed justo id ullamcorper. Nullam vitae orci ante. Maecenas a tortor laoreet, dapibus leo et, dictum risus. Integer et convallis est. Aliquam sem urna, consectetur nec venenatis in, pulvinar eu ipsum. Nunc ac pulvinar lacus. Sed nec cursus turpis. Suspendisse et ante vel augue condimentum auctor. Cras id auctor dolor, vitae rutrum dolor.
                            </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item md={3} style={{ border: "0px solid green" }}>{/**right column*/}

                            <Grid item md={12}><h3>Server Status</h3></Grid>


                            <Grid item md={12}>
                                <Grid item md={12}><h3>Discord</h3> <hr></hr>
                                </Grid>
                                <Grid item md={12} style={{ border: "0px solid red" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum sed justo id ullamcorper. Nullam vitae orci ante. Maecenas a tortor laoreet, dapibus leo et, dictum risus. Integer et convallis est. Aliquam sem urna, consectetur nec venenatis in, pulvinar eu ipsum. Nunc ac pulvinar lacus. Sed nec cursus turpis. Suspendisse et ante vel augue condimentum auctor. Cras id auctor dolor, vitae rutrum dolor.
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={style.background} style={{ minHeight: "0vh", border: "0px solid green" }}>
                </Grid>
            </Grid>
        <Divider></Divider>


            <Switch>
                <Route path="/" component={Features} />
            </Switch>
        </React.Fragment>
    )
}


export default Home;