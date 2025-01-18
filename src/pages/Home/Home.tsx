import { Stack, Typography } from "@mui/material";
import { CONTEXT_WITH_LOCAL_STORAGE, HOME } from "@Src/routes";
import { Link } from "react-router";

import { createRoute } from "@Utils/routes";

export const Home = () => (
  <Stack padding={4}>
    <Typography variant="h4" fontWeight="bold" paddingBottom={1}>
      React Examples
    </Typography>

    <Link to={createRoute(HOME)}>Home</Link>
    <Link to={createRoute(CONTEXT_WITH_LOCAL_STORAGE)}>
      Context With Local Storage
    </Link>
  </Stack>
);
