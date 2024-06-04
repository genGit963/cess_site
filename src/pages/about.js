import { Box, Divider, Typography, colors } from "@mui/material";
import { CESS_LOGO } from "../assets/assets-exp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Contact from "./contact";

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const about_style = {
    width: "95%",
    margin: "auto",
    textAlign: "center",
  };

  const cess_logo_st = {
    margin: matches ? "auto" : "auto",
    height: matches ? "350px" : "250px",
    width: matches ? "350px" : "250px",
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
        <CESS_LOGO height={"280px"} width={"280px"} style={cess_logo_st} />
        <div style={about_style}>
          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Civil Engineering Students' Society (CESS) was established in 2004
            A.D. as a nonprofit, non-political well dedicated and well
            established service oriented organization. Since inception, CESS has
            been engaged in upliftment and promotion of all round utilization of
            various field of this engineering. CESS is also engaged in
            undertaking training, education, building awareness, organizing
            intellectual discourse, talk programs and bringing out publication
            in the areas relevant to Civil Engineering and rural technology.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Also to improve much lacking awareness among various stake holders
            to put this profession on its best for overall development of the
            country. We are launching the magazine “Civil Engineering Voice”
            from its beginning period. ‘CESS’ is giving continuum to “Civil
            Engineering Voice” by publishing its volume IV with nice
            inauguration ceremony this year. This magazine has the main crux of
            motivating the enthusiastic individuals on the Civil Engineering
            field and collect the recent ideas, innovations, progresses and the
            achievement relating the inventions and other research works.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            As there are different ways of spreading the message about the
            related field like seminars, documentaries, counseling programmatic,
            we are now thinking about this magazine which would be more
            effective to all levels of individuals. With the great success and
            positive response from all sector about our last publication, we are
            being motivated to continue this magazine with more improvements and
            the content with high qualities.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Our magazine will be containing the different research, articles,
            thesis works from civil engineering topics, knowledge and experience
            of real field, and other many useful innovation idea and message,
            best for the curious brain on this field. It will help to reveal the
            hidden ideology, research and the recent educational trend being
            inaccessible to the general public sector. The theme for designing
            the magazine “Civil Engineering Voice” is that this may coordinates
            between the enthusiasts and the modern era of advance technologies.
          </p>
        </div>
      </div>

      <Contact />
    </Box>
  );
};

export default About;
