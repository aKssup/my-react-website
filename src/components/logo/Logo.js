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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            className={classes.svgHover}
        >
            <path d="M250,100 L150,300 L50,100 L125,100 L150,175 L175,100 Z M250,150 A50,50 0 1 0 250,50 A50,50 0 0 0 250,150 Z" />
            
        </svg>
    );
};
