import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

export function AnnouncementItems(props: any) {

    const useStyles = makeStyles(theme => ({
        item: {
            width: "92%",
            borderRadius: "3px",
            height: "27px",
            background: "linear-gradient(to bottom, #035b79 0%,#1b8fb7 100%)",
            display: "flex",
            alignItems: "center",
            '&:hover': {
                border: "1px solid rgba(0,0,0,0.2)",
                margin: "-1px",
                boxShadow: "inset 0 0 1px rgb(255 255 255)"
            },
            '& > a > *': {
                color: "white",
                padding: "0px 10px",
                fontSize: "12px",
                fontWeight: "bolder",
                fontFamily: "Arial",
                "&:hover": {
                    textShadow: "0 0 5px rgb(255 255 255 / 50%)"
                }
            }
        }
    }));

    const { item } = useStyles();
    return (<div className={item}><Link to={props.url || ""} style={{ textDecoration: "none", width: "100%" }}>{props.children}</Link></div>);
}