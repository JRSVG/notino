import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Activity } from "../../components/Todo/types";
import { Table } from "./components/table";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivitiesContext from "../../store/activities";

export function Detail() {
  let { key } = useParams<string>();
  const activitiesCtx = useContext(ActivitiesContext);
  const [activity, setActivity] = useState<Activity>();

  const loadCurrentActivity = () => {
    const currActivity = activitiesCtx.allActivities.filter(
      (activity) => activity.key === key
    )[0];
    if (currActivity) setActivity(currActivity);
  };

  React.useEffect(() => {
    loadCurrentActivity();
  }, []);

  return (
    <Container>
      {activity && (
        <Stack>
          <Typography variant="h1" fontSize={30}>
            {activity.activity}
          </Typography>
          <Box mt={5}>
            <Typography variant="h4" fontSize={20} mb={3}>
              Basic Information
            </Typography>
            <Table />
          </Box>
        </Stack>
      )}
      <Box mt={4}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Back To Homepage</Button>
        </Link>
      </Box>
    </Container>
  );
}
