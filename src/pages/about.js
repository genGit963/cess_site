import { Box, Divider, Typography, colors } from "@mui/material";
import { CESS_LOGO } from "../assets/assets-exp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const about_style = {
    width:"95%",
    margin: "auto",
    textAlign: "center",
  };

  const cess_logo_st = {
    margin: matches ? "auto" : "auto",
  };

  return (
    <Box sx={{ alignContent: "center", alignItems: "center", margin: "auto" }}>
      <Typography
        variant="h4"
        textAlign={"center"}
        style={{
          margin: "auto",
          color: colors.blue[900],
          fontWeight: 500,
        }}
      >
        About
      </Typography>
      <Divider />
      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CESS_LOGO height={"350px"} width={"350px"} style={cess_logo_st} />
        <p style={about_style}>
          Aliqua pariatur minim culpa elit nulla id ex minim. Laboris duis est
          laborum nostrud adipisicing dolor culpa nisi ex. Ullamco minim
          deserunt duis reprehenderit commodo commodo nulla do exercitation
          proident commodo irure cupidatat. Dolore culpa velit labore excepteur
          pariatur occaecat consequat non eu labore nostrud. Laborum sint tempor
          ut aliqua magna aliquip fugiat. Officia aliqua ad exercitation
          incididunt consectetur commodo sit eiusmod dolore ullamco commodo ad
          deserunt esse. Qui eu occaecat reprehenderit amet id anim duis culpa
          sunt. Ea reprehenderit sit reprehenderit aliqua fugiat aliqua <br />
          <br />
          adipisicing. Ea do dolore eu sint tempor labore veniam magna
          consectetur reprehenderit sunt ipsum dolore magna. Lorem velit
          reprehenderit ea aute aliquip reprehenderit. Adipisicing non
          consectetur eiusmod occaecat esse est. Ex elit anim anim excepteur
          proident fugiat tempor commodo fugiat in velit proident. Excepteur
          <br />
          <br />
          ullamco do aute officia excepteur eiusmod quis sunt occaecat. Occaecat
          nulla excepteur magna laboris aliqua labore do deserunt velit ad
          aliquip. Non nostrud quis enim ad dolor duis incididunt pariatur nisi
          tempor. Fugiat anim labore dolor dolor Lorem officia voluptate et
          velit ut esse.
        </p>
      </div>
    </Box>
  );
};

export default About;
