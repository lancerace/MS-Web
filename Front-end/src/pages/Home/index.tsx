import React, { useEffect, useState } from 'react';
import { Grid, Button, makeStyles, Divider, Typography, CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Clock from 'react-live-clock';
import box_bg from '../../assets/image/cc_bg.jpg';
import announcements from '../../assets/image/announcements.png';
import style from './styles.module.css';
import Features from '../Feature';
import Axios from "axios";
import { Announcement } from '@material-ui/icons';
interface IState {
    status: string;
    characters: string;
    accounts: string
    online:string;
}

const AnnouncementItems = (props: any) => {

    const useStyles = makeStyles(theme => ({
        item: {
            width: "392px",
            borderRadius: "3px",
            height: "27px",
            background: "linear-gradient(to bottom, #035b79 0%,#1b8fb7 100%)",
            '& > span':{
                color: "white",
                padding: "20px 7px 10px 6px",
                fontSize:"12px",
                fontFamily:"arial",
                fontWeight:"bold"
            }
        }
    }));

    const { item } = useStyles();
    return (<div className={item} style={{width:"80"}}>{props.children}</div>);
}

const Home = (props: any) => {

    const [state, setState] = useState<IState>({ status: "", characters: "", accounts: "",online:""});

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


    useEffect(() => {

        const fetchData = async () => {
            const online = await Axios.get(`${process.env.REACT_APP_MSLANCER_BASE_URL}/accounts/online`);
            const characters = await Axios.get(`${process.env.REACT_APP_MSLANCER_BASE_URL}/characters/count`);
            const accounts = await Axios.get(`${process.env.REACT_APP_MSLANCER_BASE_URL}/accounts/count`);
            setState({ ...state, characters: characters.data.count, accounts: accounts.data.count, online: online.data.account_online })
        }
        fetchData();
    }, [])

    return (
        <React.Fragment>
            <Grid container style={{ minHeight: "90vh", maxHeight: "90vh" }}>
                <Grid container item md={12} style={{ height: "10vh", border: "0px solid gray" }}>
                </Grid>
                <Grid container item md={12} style={{ border: "0px solid red", width: "100%" }} justify="center">
                    <Grid container style={{ border: "0px solid red" }} className={innerContainer} item md={10}> {/**inner container */}

                        <Grid container item md={3} style={{ border: "0px solid yellow" }}> {/**left column */}

                            <Grid container item md={12} justify="center">
                                <Grid item md={12} >
                                    <Typography align="center" variant="h6">Download Client</Typography>
                                </Grid>
                                <Grid item>
                                    <Button size="large" disabled variant="contained" color="primary"> Downloads
                                    </Button>
                                </Grid>
                            </Grid>

                            <Grid item md={12}>
                                <Grid item> <Typography variant="h6" color="textSecondary">Server Time</Typography></Grid>
                                <Grid item>
                                    <h4>
                                        <Clock
                                            format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
                                            ticking={true}
                                            timezone={'Asia/Singapore'} />
                                    </h4>
                                </Grid>
                            </Grid>
                            <Grid item md={12} style={{ height: "37vh" }}>
                            <Grid item md={12}><h3>Discord</h3> <hr></hr></Grid>
                                <Grid item md={12} style={{ position:"relative", overflow:"hidden"}}>
                                <iframe title="discord" style={{height:"100%"}} src="https://discord.com/widget?id=813482864061841439&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                </Grid>
                            </Grid>


                        </Grid>

                        <Grid container item md={5}>{/**middle column*/}
                            <Grid item md={12}>
                                <Grid item md={12} container justify="center" style={{ marginBottom: "2vh" }}><img src={announcements} alt="latest announcement"></img>
                                </Grid>
                                <hr></hr>
                                <Grid container justify="center" item md={12} style={{ border: "0px solid red" }}>
                                <AnnouncementItems>
                                    <span>Alpha Release - Phrase 1</span>
                                    </AnnouncementItems>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item md={3} style={{ border: "0px solid green" }}>{/**right column*/}
                            <Grid item md={12}>
                                <Grid item md={12}><h3>Server</h3></Grid>
                                <hr></hr>
                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Status</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">Offline</Typography></Grid>
                                </Grid>

                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Players Online</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">{state.online === "" ? <CircularProgress size={15} /> : state.online}</Typography></Grid>
                                </Grid>

                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Characters</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">{state.characters === "" ? <CircularProgress size={15} /> : state.characters}</Typography></Grid>
                                </Grid>

                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Accounts</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">{state.accounts === "" ? <CircularProgress size={15} /> : state.accounts}</Typography></Grid>
                                </Grid>
                                <hr></hr>

                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Version</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">v83</Typography></Grid>
                                </Grid>


                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Exp</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">x2</Typography></Grid>
                                </Grid>


                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Mesos</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">x1</Typography></Grid>
                                </Grid>


                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Drop</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">x2.5</Typography></Grid>
                                </Grid>

                            </Grid>

                            <Grid item md={12} style={{visibility:"hidden"}}>
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