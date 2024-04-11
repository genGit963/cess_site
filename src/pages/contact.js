import { Box, Button, Grid, TextField, Typography, colors } from "@mui/material";

const Contact = () => {
  return (
    <Box flexGrow={1} fontFamily={"Poppins"}>
      <Typography variant="h4" style={{ margin: "2% 2% 2% 0", color: colors.blue[900], fontWeight:500 }}>Contact</Typography>
      <h2 style={{ margin: "2% 2% 2% 0" }}>We are just a mail away.</h2>
      <Grid container>
        <Grid sx={12} md={6}>
          <TextField
            label="Name"
            type="outlined"
            sx={{ fontFamily: "Poppins", margin: "4% 4% 4% 0", width: "70%" }}
          />
        </Grid>

        <Grid sx={12} md={6}>
          <TextField
            label="Email"
            type="outlined"
            sx={{ fontFamily: "Poppins", margin: "4% 4% 4% 0", width: "70%" }}
          />
        </Grid>

        <Grid sx={12} md={12}>
          <TextField
            label="Message"
            type="outlined"
            fullWidth
            multiline
            sx={{
              //   width: "60%",
              margin: "2% 2% 2% 0",
              fontFamily: "Poppins",
            }}
          />
        </Grid>
      </Grid>
      <Button
        disableElevation
        variant="contained"
        sx={{ margin: "2% 2% 2% 0", width: "10%" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Contact;