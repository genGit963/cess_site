import { Box, Card, Divider, Grid, Typography, colors } from "@mui/material";
import { FB_LOGO, INSTA_LOGO } from "../assets/assets-exp";
import { committee18th } from "../data/member-data";

function MemberCard({ name, pic, post, batch, profile_links }) {
  const card_style = {
    height: "10%",
    width: "300px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    background: `${colors.blue[50]}`,
    boxShadow:`1px 1px 1px 1px ${colors.grey[300]}`,
    padding: "3%",
    margin: "4% auto",
  };

  return (
    <Card elevation={0} sx={card_style}>
      <img
        src={pic}
        height={180}
        width={180}
        style={{ borderRadius: 100, objectFit: "cover" }}
        alt={`${name}_pic`}
        loading="lazy"
      />
      <Typography
        fontWeight={500}
        color={colors.blue[900]}
        fontSize={15}
        padding={1}
      >
        {name}
      </Typography>
      <Typography>{post}</Typography>
      <Typography>{batch}</Typography>
      <div style={{ display: "flex", gap: "1em", margin: "4%" }}>
        <a href={profile_links.facebook} target="_blanck">
          <FB_LOGO height={30} width={30} />
        </a>
        <a href={profile_links.instagram} target="_blanck">
          <INSTA_LOGO height={30} width={30} />
        </a>
      </div>
    </Card>
  );
}

const Members = () => {
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
        CESS Committee
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
        19th Committee Members
      </Typography>

      <Divider />
      {/* ------------------------------- Members card ------------------------- */}

      <Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2%",
            justifyContent: "center",
          }}
        >
          {committee18th.map((item) => (
            <MemberCard
              key={item.sn}
              name={item.name}
              pic={item.pic}
              post={item.post}
              batch={item.batch}
              profile_links={item.profile_links}
            />
          ))}
        </div>
      </Grid>
    </Box>
  );
};

export default Members;
