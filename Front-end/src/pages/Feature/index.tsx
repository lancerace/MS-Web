import React from 'react';
import { Grid, makeStyles, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';
import style from './styles.module.css';
import classic from '../../assets/image/features/classic.jpg';
import mesos from "../../assets/image/features/mesos.jpg";
import community from "../../assets/image/features/community.jpg";
import hauntedmansion from "../../assets/image/features/hauntedmansion.jpg";
import partyquest from "../../assets/image/features/Pqkingslime.jpg";
import votenx from "../../assets/image/features/votenx.png";
const Feature = (props: any) => {

    const useStyles = makeStyles({
        innerContainer: {
            background:"white",
            width:"100%",
            '& > div': {
                border: "0px solid purple",
                padding: "2vh",
                boxSizing: "border-box"
            },
            '& > div:nth-child(1)': {
                marginTop: "2vh",
                border: "0px solid green"
            },
            '& > div:nth-child(2)': {
                '& > h1': {
                    color: "#0363c4"
                }
            }
        },
        featureHeader:{
            fontSize:"20px",
            fontFamily:"circular,sans-serif",
            textAlign:"center",
            '& > p':{
             lineHeight:"1.6em"
            }
        },
        featureContainer: {
            '& > div': {
                //boxShadow: '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)'
                boxShadow:'0 0 10px 0 rgb(122 122 122 / 47%)',
                borderColor:'rgba(174,174,174,.37)'
            },
            '& >div:nth-child(2)':{
                marginLeft:"4vh",
                marginRight:"4vh"
            },
            marginBottom:"10vh"
        },
        cardContent:{
            '& > div:nth-child(2)':{
            lineheight:"1.6em"
            }
        }
    });

    const { innerContainer, featureContainer,featureHeader } = useStyles();

    return (
            <Grid container className={innerContainer} justify="center" style={{ border: "0px solid red" }}>

                <Grid item md={12} sm={12}></Grid>
                <Grid md={12} sm={12} item style={{ textAlign: "center" }}> {/** text intro */}
                    <h1>What to expect?</h1>
                    <p style={{ fontSize: "18px" }}>Features that will make you play Maplestory again! </p>
                </Grid>

                <Grid container item md={12} sm={12} style={{border:"0px solid red"}}> {/**features */}
                    <Grid justify="center" className={featureContainer}  container item md={12}>
                        <Grid item md={3} sm={12}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Classic gameplay"
                                height="120"
                                image={classic}
                                title="Classic gameplay"
                            />
                            <CardContent className={featureHeader}>
                             <span> Classic Gameplay</span>
                                 <p></p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    SeaMS aim to be GMS-like but with some tweak that make the game more enjoyable.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>

                        <Grid item md={3} sm={12}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Mesos"
                                height="120"
                                image={mesos}
                                title="Mesos"
                            />
                            <CardContent className={featureHeader}>
                             <span> No pay to win</span>
                                 <p></p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Restricly no p2w to ensure a fair gameplay to all players. We believes that a good server is to have no unfair advantages.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    
                        <Grid item md={3} sm={12}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Community based"
                                height="120"
                                image={community}
                                title="Community based"
                            />
                            <CardContent className={featureHeader}>
                             <span> Community based</span>
                                 <p></p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    We want a community based server where players interact with each other more often.
                                    This includes some of the other features that will contribute to this.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>

                    </Grid>

                    <Grid justify="center" className={featureContainer}  container item md={12}>
                        <Grid item md={3}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="hauntedmansion"
                                height="120"
                                image={hauntedmansion}
                                title="hauntedmansion"
                            />
                            <CardContent className={featureHeader}>
                             <span> No Chimney Mansion </span>
                                 <p></p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This map is disabled to encourage community gameplay based such as PQ.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                        <Grid item md={3}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="partyquest"
                                height="120"
                                image={partyquest}
                                title="partyquest"
                            />
                            <CardContent className={featureHeader}>
                             <span> Party Quest min 2 players</span>
                                 <p></p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    We are working toward lowering the player requirements to enter PQ. Kerning PQ, Ludi PQ and so on
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                        <Grid item md={3}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="votenx"
                                height="120"
                                image={votenx}
                                title="votenx"
                            />
                            <CardContent className={featureHeader}>
                             <span> Vote for NX</span>
                                 <p></p>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    You can vote for the server to get NX rewards. Supporting the server to get more players too!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    </Grid>
                </Grid>

            </Grid>



    )
}


export default Feature;