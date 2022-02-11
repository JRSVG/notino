import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { MessageType, VariantType } from "../../store/ui";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export type CustomizedSnackbarProps = {
  variant: VariantType;
  message: MessageType;
  resetAction: () => void;
};

export const CustomizedSnackbar: React.FC<CustomizedSnackbarProps> = (
  props
) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    props.resetAction();
  };

  if (props.variant)
    return (
      <Snackbar
        open={!!props.message}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={props.variant}
          sx={{ width: "100%" }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    );

  return <></>;
};
