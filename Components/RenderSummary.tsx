import React from "react";
import { Grid } from "@material-ui/core";

const RenderSummary = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default RenderSummary;
