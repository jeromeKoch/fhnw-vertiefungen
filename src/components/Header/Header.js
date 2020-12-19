import { React } from "react";
import { AppBar, Grid, Toolbar, Typography, ButtonGroup, Button } from "@material-ui/core";
import logo from "./logo.svg"

const Header = () => {
    return (
        <AppBar>
            <Grid container>
                <Grid item xs spacing={3} direction="row">
                    <div style={{display: "flex", direction: "row", alignItems: "center"}}>
                        <Toolbar>
                            <img 
                                src={logo} 
                                alt="" 
                                height="30" 
                                width="30"/>
                            </Toolbar>
                        <Typography variant="h6">
                            FHNW Vertiefungen
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs spacing={3} direction="row">
                    asd
                </Grid>
                <Grid item xs spacing={3} direction="row">
                    <div style={{display: "flex", direction: "row", justifyContent: "flex-end", alignItems: "center", marginRight: "5%"}}>
                        <Typography variant="body1">
                            built by Aionemus
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;