import { Box, Typography, colors } from "@mui/material";

const Events = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        style={{
          margin: "2% 2% 2% 0",
          color: colors.blue[900],
          fontWeight: 500,
        }}
      >
        About
      </Typography>
    </Box>
  );
};

export default Events;