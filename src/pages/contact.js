import { Box, Button, TextField, Typography, colors } from "@mui/material";

const Contact = () => {
  return (
    <Box flexGrow={1} fontFamily={"Poppins"}>
      <Typography variant="h4" style={{ margin: "1% 2% 2% 0", color: colors.blue[900], fontWeight:500 }}>Contact</Typography>
      <h2 style={{ margin: "1% 2% 2% 0" }}>We are just a mail away.</h2>
          <TextField
            label="Name"
            type="outlined"
            sx={{ fontFamily: "Poppins", margin: "1% 4% 2% 0", width: "50%" }}
          />

          <TextField
            label="Email"
            type="outlined"
            sx={{ fontFamily: "Poppins", margin: "1% 4% 2% 0", width: "70%" }}
          />

          <TextField
            label="Message"
            type="outlined"
            fullWidth
            multiline
            sx={{
              //   width: "60%",
              margin: "1% 2% 2% 0",
              fontFamily: "Poppins",
            }}
          />
      <Button
        variant="contained"
        sx={{ margin: "1% 2% 2% 0", width: "10%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Contact;