import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({ status, message, open}) {

  return (status && message ? <Snackbar open={open} autoHideDuration={6000}>
        <Alert
          severity={`${status}`}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar> : <React.Fragment></React.Fragment>
  );
}
