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
            CESS, Civil Engineering Students' Society, founded in 2004 A.D.,
            operates as a nonprofit, non-political entity dedicated to providing
            a broad range of services aimed at community and professional
            upliftment. The core mission of CESS is to foster the comprehensive
            utilization and development of various fields, with a strong focus
            on civil engineering and rural technology.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Since its inception, CESS has consistently worked towards the
            betterment of society through diverse initiatives. The organization
            places a significant emphasis on education and training, aiming to
            equip individuals with the necessary skills and knowledge to excel
            in their respective fields. By organizing and conducting training
            sessions, CESS ensures that participants are well-prepared to meet
            the demands of their professions, particularly in civil engineering
            and related areas. Moreover, CESS is deeply committed to the
            development of students, providing them with opportunities for
            hands-on learning, internships, and exposure to real-world
            engineering challenges. This focus on student development helps to
            create a pipeline of skilled, knowledgeable, and motivated future
            professionals who are well-prepared to contribute to their fields.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Awareness-building is another critical aspect of CESS's operations.
            The organization undertakes numerous campaigns and programs designed
            to educate the public and specific communities about important
            issues and advancements in civil engineering and rural technology.
            This proactive approach helps to foster a more informed and engaged
            populace, which is essential for sustainable development.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            In addition to educational and awareness-building activities, CESS
            actively organizes intellectual discourses and talk programs. These
            events provide a platform for professionals, scholars, and
            enthusiasts to exchange ideas, discuss innovations, and address
            challenges within the industry. By facilitating these discussions,
            CESS promotes a culture of continuous learning and professional
            growth.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Publications are another vital component of CESS's contributions.
            The organization brings out various publications that cover a wide
            range of topics pertinent to civil engineering and rural technology.
            These publications serve as valuable resources for professionals and
            students, offering insights, research findings, and practical
            knowledge.
          </p>

          <p
            style={{
              color: "rgb(0,0,0,0.65)",
              marginBottom: "10px",
            }}
          >
            Through its multifaceted initiatives, CESS aims to achieve
            excellence and make a significant impact on both the professional
            community and society at large. The organization's commitment to
            promoting education, awareness, and intellectual discourse
            underscores its pivotal role in advancing civil engineering and
            rural technology, ultimately contributing to the overall progress
            and development of the communities it serves.
          </p>
        </div>
      </div>

      <Contact />
    </Box>
  );
};

export default About;
