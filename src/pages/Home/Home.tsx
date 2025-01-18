import { Stack, Typography } from "@mui/material";
import { HOME } from "@Src/routes";
import { Link } from "react-router";

import { createRoute } from "@Utils/routes";

export const Home = () => (
  <Stack padding={4}>
    <Typography variant="h4" fontWeight="bold" paddingBottom={1}>
      React Examples
    </Typography>

    <Link to={createRoute(HOME)}>Home</Link>
  </Stack>
);
