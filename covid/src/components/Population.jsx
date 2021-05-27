import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function Population({ population, title }) {
  return (
    <Card>
      <CardContent>
        <h2>{title}</h2>
        <Typography color="textSecondary">{population}</Typography>
      </CardContent>
    </Card>
  );
}

export default Population;
