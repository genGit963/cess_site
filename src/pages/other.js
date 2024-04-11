import { Box, Divider, Typography, colors } from "@mui/material";

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
        Others 
      </Typography>
      <Divider />
      <Typography
        variant="h5"
        textAlign={"center"}
        style={{
          margin: "2% 2% 2% 0",
          color: colors.common.black,
          fontWeight: 500,
        }}
      >
        Other Activities
      </Typography>
      <Divider />
    </Box>
  );
};

export default Events;