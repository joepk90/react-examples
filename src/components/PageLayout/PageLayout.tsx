import { Home } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { HOME, CONTEXT_WITH_LOCAL_STORAGE } from "@Src/routes";
import React from "react";
import { Link, Outlet, useLocation } from "react-router";

import { createRoute } from "@Utils/routes";

const PagePathTitleMap: Record<string, string> = {
  [createRoute(HOME)]: "Home",
  [createRoute(CONTEXT_WITH_LOCAL_STORAGE)]: "Context With Local Storage",
};

export const PageLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Stack
        flexDirection="row"
        paddingLeft={2}
        paddingTop={2}
        paddingBottom={2}
      >
        <IconButton
          size="large"
          component={Link}
          to="/"
          aria-label="Home"
          color="primary"
        >
          <Home fontSize="large" />
        </IconButton>

        <Typography
          variant="h5"
          fontWeight="bold"
          paddingBottom={0}
          paddingTop={2}
          paddingLeft={1.25}
        >
          {PagePathTitleMap[location.pathname]}
        </Typography>
      </Stack>

      <Box paddingLeft={4} paddingRight={4} paddingBottom={4} paddingTop={1}>
        <Outlet />
      </Box>
    </>
  );
};
