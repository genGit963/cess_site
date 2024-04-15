import { Box, Divider, Typography, colors } from "@mui/material";
import { ERROR404_PIC } from "../assets/assets-exp";

const Error404 = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        style={{
          margin: "2% 2% 2% 0",
          color: colors.red[900],
          fontWeight: 500,
        }}
      >
        Page Not Found !!
      </Typography>
      <Divider />
      <div style={{margin:"auto", padding:"5%", height:"40%", width:"40%"}}>
        <ERROR404_PIC height={"100%"} width={"100%"}/>
      </div>
    </Box>
  );
};

export default Error404;