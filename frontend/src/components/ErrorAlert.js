import React from "react";
import { Alert } from "react-bootstrap";

function ErrorAlert(props) {
  return (
    <div>
      {props.errors ? (
        <Alert key="danger" variant="danger">
          {props.errors &&
            props.errors.map((error, index) => (
              <div key={index}>{error.defaultMessage}</div>
            ))}
        </Alert>
      ) : null}
    </div>
  );
}

export default ErrorAlert;
