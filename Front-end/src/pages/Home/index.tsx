import React, { useEffect, useState } from 'react';
import { Grid, Button, makeStyles, Divider, Typography, CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import box_bg from '../../assets/image/cc_bg.jpg';
import announcements from '../../assets/image/announcements.png';
import style from './styles.module.css';
import Features from '../Feature';
import Axios from "axios";
import { AnnouncementItems } from './Announcement/Items';
import discordIcon from "../../assets/image/join-us-on-discord.png";
import Clock from "react-live-clock";
import AnalogClock from '../../components/Clock';

import chansey from "../../assets/image/chansey.gif";
import abra from "../../assets/image/abra.gif"
import markofbeta from "../../assets/image/markofbeta.gif"

interface IState {
    status: string;
    characters: string;
    accounts: string
    online: string;
}

const AnnouncementPage = (props: any) => {
    return (<Grid item md={12} sm={12}>
        <Typography variant="h6"><b>{props.title}</b></Typography>
        <hr></hr>
        {props.children}
    </Grid>)
}

const Home = (props: any) => {

    const [state, setState] = useState<IState>({ status: "", characters: "", accounts: "", online: "" });
    const [date, setDate] = useState({ date: new Date() })
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

        setInterval(
            () => setDate({ date: new Date() }),
            1000
        );
    }, [])

    return (
        <React.Fragment>
            <Grid container style={{ minHeight: "90vh", maxHeight: "90vh" }}>
                <Grid container item md={12} style={{ border: "0px solid gray" }}>
                </Grid>
                <Grid container item md={12} style={{ border: "0px solid red", width: "100%" }} justify="center">
                    <Grid container style={{ border: "0px solid red" }} className={innerContainer} item md={10}> {/**inner container */}

                        <Grid container md={3} direction="column" style={{ border: "0px solid yellow", opacity: "90%" }}> {/**left column */}
                            <Grid md={12} sm={12} container item direction="column" style={{ flex: 1, maxHeight: "20vh" }}>

                                <Grid item>
                                    <Typography variant="h6"><b>Clients</b></Typography>
                                    <hr></hr>
                                </Grid>

                                <Grid container justify="center" alignItems="center">
                                    <Button size="large" variant="contained" color="primary" style={{ background: "green" }}
                                        onClick={() => { window.open("https://drive.google.com/drive/folders/119JOFdmR7LeWl0sdCQ1wDiYzVDtyg6ro?usp=sharing", "_blank") }}>
                                        Download
                                        </Button>
                                </Grid>
                            </Grid>

                            <Grid container item md={12} sm={12} style={{ flexBasis: 1 }} direction="column">
                                <Grid item>
                                    <Typography variant="h6">
                                        <b>Server Time</b>
                                        <hr></hr>
                                    </Typography>
                                    <Clock
                                        date={Date.now()}
                                        format={'ddd, DD MMMM YYYY, h:mm:ss A'}
                                        ticking={true}
                                        timezone={'Asia/Singapore'} />
                                </Grid>

                                <Grid item style={{ height: "3vh" }}></Grid>

                                <Grid container justify="center" item style={{ border: "0px solid red" }}>
                                    <AnalogClock></AnalogClock>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item md={5} sm={12}>{/**middle column*/}

                            <Grid item md={12} sm={12}>
                                <Grid item md={12} container justify="center" style={{ marginBottom: "2vh" }}><img src={announcements} alt="latest announcement"></img>
                                </Grid>

                                <Grid container justify="center" item md={12}>

                                    <AnnouncementItems url="/">
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>Party Leech Updates (GMS like)</div>
                                            <div>4.4.21.</div>
                                        </div>
                                    </AnnouncementItems>
                                    <p></p>

                                    <AnnouncementItems url="1">
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>Pokemon NPC added in FM!</div>
                                            <div>16.3.21.</div>
                                        </div>
                                    </AnnouncementItems>
                                    <p></p>
                                    <AnnouncementItems url="2">
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>Leveling milestone rewards for official release!</div>
                                            <div>12.2.21.</div>
                                        </div>
                                    </AnnouncementItems>
                                    <p></p>
                                    <AnnouncementItems url="3">
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>Beta Release - Welcome to the server!</div>
                                            <div>12.2.21.</div>
                                        </div>
                                    </AnnouncementItems>
                                </Grid>
                            </Grid>


                            <Grid container item sm={12} md={12} style={{ opacity: "90%", height: "45vh" }}>

                                <Switch>
                                    <Route exact path="/">
                                        <AnnouncementPage title="Party Leech Mechanism">
                                            <Grid container direction="column" justify="space-between" style={{ border: "0px solid red", flex: 1 }}>
                                                <Grid item md={12} style={{ border: "0px solid gray", fontSize: "13px", marginBottom: "8vh" }}>

                                                    <Typography color="primary" variant="h6">Changelog</Typography>
                                                    <ul>
                                                        <li>Non contributing member must be +-5levels from monster to gain exp</li><p></p>
                                                        <li>Non contributing member must be +-40levels with party member to gain exp</li><p></p>
                                                        <li>Non contributing member gain exp if he dealt 10% of mob hp regardless of his level with monster or with party member.</li><p></p>
                                                    </ul>
                                                </Grid>
                                            </Grid>
                                        </AnnouncementPage>
                                    </Route>


                                    <Route exact path="/1">
                                        <AnnouncementPage title="Pokemon NPC">
                                            <Grid container direction="column" justify="space-between" style={{ border: "0px solid red", flex: 1 }}>
                                                <Grid item md={12} style={{ border: "0px solid gray", fontSize: "13px", marginBottom: "8vh" }}>
                                                    <p>
                                                        <b>Abra</b>: a mysterious tiny yellow pokemon in FM that love to teleport players anywhere.
                                                    </p>

                                                    <p>
                                                        <b>Chansey</b>: A ball-like pokemon in FM that helps players in trading.
                                                    </p>
                                                </Grid>


                                                <Grid style={{ border: "0px solid red" }} justify="center" container>
                                                    <Grid item md={3}><img src={abra} alt="abra"></img></Grid>
                                                    <Grid item md={3}><img src={chansey} style={{ width: "45%" }} alt="chansey"></img></Grid>
                                                </Grid>
                                            </Grid>
                                        </AnnouncementPage>
                                    </Route>
                                    <Route path="/2">
                                        <AnnouncementPage title="Leveling milestone">
                                            <Grid container direction="column" justify="space-between" style={{ border: "0px solid red", flex: 1 }}>
                                                <Grid item md={12} style={{ border: "0px solid gray", fontSize: "13px" }}>
                                                    Achieve Leveling milestone and be rewarded the mark of beta during official release! <p></p><Grid item md={3}><img src={markofbeta} alt="markofbeta"></img></Grid>
                                                    <p>
                                                        <b>Lv 70:</b> Mark of beta (red).  <b>Stats:</b> +5 stats to all
                                                    </p>
                                                    <p>
                                                        <b>Lv 100:</b> Mark of beta (purple). <b>Stats:</b> +10 stats to all
                                                    </p>
                                                    <p>
                                                        <b>Lv 120:</b> Mark of beta (blue). <b>Stats:</b> +5 stats to all. 1wa, 1ma
                                                    </p>
                                                    <p>
                                                        <b>Lv 150:</b> Mark of beta (black). <b>Stats:</b> +10 stats to all, 1 wa, 1ma
                                                    </p>
                                                </Grid>
                                            </Grid>
                                        </AnnouncementPage>
                                    </Route>

                                    <Route path="/3">
                                        <AnnouncementPage title="Beta release">
                                            <Grid container direction="column" justify="space-between" style={{ border: "0px solid red", flex: 1 }}>
                                                <Grid item md={12} style={{ border: "0px solid gray", fontSize: "13px" }}>
                                                    Server launched! Beta release will last 4-6 months.
                                                </Grid>

                                            </Grid>
                                        </AnnouncementPage>
                                    </Route>
                                </Switch>
                            </Grid>
                        </Grid>

                        <Grid container item md={3} style={{ border: "0px solid green", opacity: "90%" }}>{/**right column*/}
                            <Grid item md={12}>
                                <Grid item md={12}><h3>Server</h3></Grid>
                                <hr></hr>
                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Status</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">Online</Typography></Grid>
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
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">x8</Typography></Grid>
                                </Grid>


                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Mesos</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">x1</Typography></Grid>
                                </Grid>


                                <Grid item md={12} container alignItems="center">
                                    <Grid item md={6}><Typography variant="subtitle1">Drop</Typography></Grid>
                                    <Grid item md={6}><Typography color="primary" variant="subtitle1">x2</Typography></Grid>
                                </Grid>

                            </Grid>
                            <Grid item md={12}>
                                <Grid item md={12}><h3>Social</h3></Grid>
                                <Grid container justify="center">

                                    <img src={discordIcon} alt="Discord" style={{ width: "200px", cursor: "pointer", boxShadow: '0 0 10px 0 rgb(122 122 122 / 47%)' }} onClick={() => {
                                        window.open("https://discord.gg/bFTDZvM8Uu", "__blank");
                                    }} />
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