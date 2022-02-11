import Todo from "../../components/Todo";
import { useContext } from "react";
import _ from 'lodash'
import { ActivitiesContext } from "../../store/activities";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function Homepage() {
  const activitiesCtx = useContext(ActivitiesContext);

  return (
    <Container>
      <Typography variant="h1" fontSize={40} textAlign="center">
        To-Do Random Generating App
      </Typography>
      <Grid container spacing={2} mt={2} alignItems="stretch">
        {_.map(activitiesCtx.allActivities, activity => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={activity.key}>
            <Todo
              activity={activity}
              setCurrentActivity={activitiesCtx.setCurrentActivity}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={2}>

        <Button variant="outlined" onClick={activitiesCtx.fetchActivities}>Fetch more actions</Button>
      </Box>
    </Container>
  );
}
