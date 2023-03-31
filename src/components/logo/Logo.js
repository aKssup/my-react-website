import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={classes.svgHover}>
            <path d="M300,50 L200,200 L100,50 L50,50 L150,250 L250,250 L350,50 Z" />
            <path d="M225,175 a75,75 0 1,0 0,50 a75,75 0 1,0 0,-50" />
        </svg>

    );
};
