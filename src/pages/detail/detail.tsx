import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Table } from "./components/table";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivitiesContext from "../../store/activities";

export function Detail() {
  let { key } = useParams<string>();
  const activitiesCtx = useContext(ActivitiesContext);

  const loadCurrentActivity = (key: string) => {
    const currActivity = activitiesCtx.allActivities.find(
      (activity) => activity.key === key
    );
    if (currActivity && currActivity.key) {
      activitiesCtx.setCurrentActivity(currActivity);
    } else if (key) {
      activitiesCtx.fetchCurrentActivity(key);
    }
  };

  React.useEffect(() => {
    if (key) loadCurrentActivity(key);
  }, [key]);

  return (
    <Container>
      {activitiesCtx.currentActivity?.key && (
        <Stack>
          <Typography variant="h1" fontSize={30}>
            {activitiesCtx.currentActivity.activity}
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Back To Homepage</Button>
        </Link>
      </Box>
    </Container>
  );
}
