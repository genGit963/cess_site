import { Box, Divider, Typography, colors } from "@mui/material";
import { CESS_LOGO } from "../assets/assets-exp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const about_style = {
    width: matches ? "55%" : "auto",
    padding: "2%",
    margin: "2% auto",
  };

  const cess_logo_st = {
    position: "relative",
    right: matches ? "-40%" : "-14%",
    margin: "2% auto",
  };

  return (
    <Box sx={{ alignContent: "center", alignItems: "center" }}>
      <Typography
        variant="h4"
        textAlign={"center"}
        style={{
          margin: "2% 2% 1% 0",
          color: colors.blue[900],
          fontWeight: 500,
        }}
      >
        About
      </Typography>
      <Divider />
      <CESS_LOGO height={"260px"} width={"260px"} style={cess_logo_st} />
      <Typography textAlign={"justify"} sx={about_style}>
        Enim excepteur voluptate elit ipsum culpa dolor ex Lorem. Lorem labore
        deserunt velit fugiat non eu ut consequat occaecat commodo ex elit.
        Pariatur enim officia voluptate est nisi. Voluptate ea ex dolor labore
        occaecat sunt ea aliqua eu. Id culpa cupidatat Lorem non deserunt
        laborum.
        <br />
        <br /> Aliquip officia Lorem do laborum minim aute aliquip fugiat
        reprehenderit tempor. Lorem tempor duis eiusmod est aliquip. Laborum
        veniam quis deserunt velit est consequat. Nulla adipisicing cupidatat
        laboris Lorem pariatur elit veniam amet dolore ipsum cillum exercitation
        excepteur cupidatat.
      </Typography>
    </Box>
  );
};

export default About;
