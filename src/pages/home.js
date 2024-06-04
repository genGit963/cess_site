import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Typography, colors } from "@mui/material";

import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import { AWARDS_PIC, INTRO_PIC, OBJECTIVE_PIC } from "../assets/assets-exp";
import { reviews } from "../data/review-data";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(2),
  color: colors.grey[800],
}));

const bullets_style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: 10,
  margin: "2% auto",
};

function ObjectiveBullets({ object_lines }) {
  return (
    <div style={bullets_style}>
      <DoneAllRoundedIcon color="primary" />
      <Typography fontSize={16} fontWeight={400}>
        {object_lines}
      </Typography>
    </div>
  );
}

function AwardsTemplate({ awards_position, events_detail }) {
  return (
    <div style={bullets_style}>
      <EmojiEventsRoundedIcon color="primary" />
      <Typography fontSize={16} fontWeight={400}>
        {awards_position}
        <span style={{ fontWeight: 600, color: colors.blue[900] }}>
          {" "}
          : {events_detail}
        </span>
      </Typography>
    </div>
  );
}

function ReviewCard({ name, pic, post, review }) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        border: `1px solid ${colors.blue[200]}`,
        minWidth: "380px",
        maxWidth: "auto",
        backgroundColor: `${colors.blue[50]}`,
        boxShadow: "0px 0px 10px rgb(0,0,0,0.20)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          justifyContent: "flex-start",
        }}
      >
        <img
          src={pic}
          alt="img"
          height={100}
          width={100}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          loading="lazy"
        />
        <div style={{ margin: "4%", padding: 2 }}>
          <Typography fontWeight={600} fontSize={18} color={colors.blue[900]}>
            {name}
          </Typography>
          <Typography fontWeight={500} fontSize={14} color={"GrayText"}>
            {post}
          </Typography>
        </div>
      </div>

      <Typography fontSize={14} width={"100%"} color={"rgb(0,0,0,0.6)"}>
        {review}
      </Typography>
    </Paper>
  );
}

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* --------------------------- Intro ------------------------ */}
        <Grid xs={12} md={8}>
          <Item margin={"6% auto "}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, margin: "3% auto 4% auto" }}
            >
              Civil Engineering Students' Society
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 16 }}>
              CESS, was established in 2004 A.D. as a nonprofit, non-political
              well dedicated <br />
              and well established service oriented organization. Since
              inception, CESS has been
              <br /> engaged in upliftment and promotion of all round
              utilization of various field.
              <br />
              CESS is also engaged in undertaking training, education, <br />
              building awareness, organizing intellectual discourse, talk
              programs
              <br />
              and bringing out publication in the areas relevant <br />
              to Civil Engineering and rural technology. To make a milestone
              step for
              <br />
              propelling them towards excellence.
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} md={4}>
          <Item>
            <img
              src={INTRO_PIC}
              height={"100%"}
              width={"100%"}
              style={{
                borderRadius: 10,
                margin: "26% auto 5% auto",
                boxShadow: "1px 6px 20px 1px rgba(0, 0, 0, .2)",
              }}
              alt="intro-pic"
              loading="lazy"
            />
          </Item>
        </Grid>

        {/* --------------------------- Club-Objectives ------------------------ */}
        <Grid xs={12} md={4}>
          <Item margin={"10% auto 5% auto"}>
            <OBJECTIVE_PIC
              width={"80%"}
              height={"60%"}
              style={{ borderRadius: 5 }}
            />
          </Item>
        </Grid>

        <Grid xs={12} md={8}>
          <Item margin={"5% auto 2% 10%"}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ margin: "3% auto" }}
            >
              Objective Bullets
            </Typography>

            <ObjectiveBullets
              object_lines={"To jack up skill and personal growth."}
            />
            <ObjectiveBullets
              object_lines={
                "To underline career guidance and professional development."
              }
            />
            <ObjectiveBullets
              object_lines={
                "To heighten community and professional networking."
              }
            />
            <ObjectiveBullets
              object_lines={"Intensifying academic and technical competition."}
            />
            <ObjectiveBullets
              object_lines={"To reinforce sports and athletics."}
            />
          </Item>
        </Grid>

        {/* --------------------------- Club-Awards ------------------------ */}
        <Grid xs={12} md={8} margin={"6% auto"}>
          <Item>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ margin: "5% auto" }}
            >
              CESS is decorated by
            </Typography>
            <AwardsTemplate
              awards_position="Magazine "
              events_detail="Civil Engineering Voice Vol.IV "
            />
            <AwardsTemplate
              awards_position="Runner up "
              events_detail="Popsicle Building Shake Table DELTA 4.0 (National Events)"
            />
            <AwardsTemplate
              awards_position={"Participation "}
              events_detail={"Hydropower model DELTA 4.0 (National Events)"}
            />
            <AwardsTemplate
              awards_position="Runner UP"
              events_detail="FSU Cup 2080"
            />
            <AwardsTemplate
              awards_position="2 Winners "
              events_detail="ERC 5km Marathon (Both Boy and Girl)"
            />
            <AwardsTemplate
              awards_position="Runner Up "
              events_detail="ERC 5km Marathon (Boy)"
            />
            <AwardsTemplate
              awards_position={"Winner "}
              events_detail={"NTBNS 200x4 Relay Race (Boy and Girl)"}
            />
            <AwardsTemplate
              awards_position={"Winner "}
              events_detail={"AutoCAD Drafting Competition"}
            />
          </Item>
        </Grid>

        <Grid xs={12} md={4} margin={"7% auto"}>
          <Item>
            <AWARDS_PIC height={"100%"} width={"100%"} />
          </Item>
        </Grid>

        {/* --------------------------- Reviews ------------------------ */}
        {/* <Grid container ></Grid> */}
        <Grid xs={12} md={12}>
          <Typography variant="h4" fontWeight={600} sx={{ margin: "4% auto" }}>
            People Prespectives
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              overflowX: "auto",
            }}
          >
            {reviews.map((item) => (
              <ReviewCard
                key={item.sn}
                name={item.name}
                pic={item.pic}
                post={item.post}
                review={item.review}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
