import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function NewsGrid({ children }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {children}
        </Grid>
      </Box>
    </div>
  );
}
