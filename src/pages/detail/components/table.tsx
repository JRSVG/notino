import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table as TableComponent,
  capitalize,
} from "@mui/material";
import _ from "lodash";
import { Fragment, useContext } from "react";
import { ActivitiesContext } from "../../../store/activities";

export const Table: React.FC = () => {
  const activityCtx = useContext(ActivitiesContext);
  const activityDetails = activityCtx.currentActivity;

  if (activityDetails)
    return (
      <TableContainer>
        <TableComponent
          sx={{ maxWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            {_.map(Object.entries(activityDetails), ([key, value]) => (
              <Fragment key={`${key}${value}`}>
                {value !== "" && (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {capitalize(key)}
                    </TableCell>
                    <TableCell align="right">{value}</TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))}
          </TableBody>
        </TableComponent>
      </TableContainer>
    );
    return <></>
};
