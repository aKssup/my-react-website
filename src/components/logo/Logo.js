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
            <path d="M50,350 L150,50 L250,350 L200,350 L175,275 L75,275 Z" transform="translate(-50 -50)" />
            <path d="M400,382.13a199.13,199.13,0,0,0,50-131.35h0c0-.26,0-.52,0-.78a199.11,199.11,0,0,0-50-132.11V250c0,82.71-67.29,150-150,150S100,332.71,100,250s67.29-150,150-150V50C139.72,50,50,139.72,50,250s89.72,200,200,200a199.56,199.56,0,0,0,150-67.87Z" transform="translate(-50 -50)" />
            <path d="M100,249.22h0V250C100,249.74,100,249.48,100,249.22Z" transform="translate(-50 -50)" />
        </svg>
    );
};
