import { Card, CardContent, Paper } from "@material-ui/core";
import React from "react";

const Module = (props) => {
    return (
        <Card>
            <CardContent>
                <h2>{props.mName}</h2>
                <h3>{props.mId}</h3>
            </CardContent>
        </Card>
    );
}

/*    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>*/

export default Module;