import { Stack, Typography } from "@mui/material";
import { Link } from "react-router";

export const Home = () => (
  <Stack padding={4}>
    <Typography variant="h4" fontWeight="bold" paddingBottom={1}>
      React Examples
    </Typography>

    <Link to="/">Home</Link>
  </Stack>
);
