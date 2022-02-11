import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "./types";

export type TodoProps = {
  activity: Activity,
  setCurrentActivity: (activity: Activity) => void
}

export const Todo: React.FC<TodoProps> = (props) => {

  const onClickHandler = (event: React.MouseEvent, activity: Activity) => {
    props.setCurrentActivity(activity);
  };

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.activity.activity}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/activities/${props.activity.key}`}
          onClick={(event) => onClickHandler(event, props.activity)}
        >
          <Button size="small">More Information</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
