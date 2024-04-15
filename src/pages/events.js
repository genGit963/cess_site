import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
  colors,
} from "@mui/material";
import { events_data } from "../data/events-data";
import { useNavigate } from "react-router-dom";

function EventCard({ sn, theme_pic, headline, bit_detail }) {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate(`/events/${sn}`);
  };
  const card_style = {
    height: "10%",
    width: "300px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    background: `${colors.blue[50]}`,
    padding: "3%",
    margin: "4% auto",
  };
  return (
    <Card elevation={0} sx={card_style}>
      <img
        src={theme_pic}
        height={250}
        width={"95%"}
        style={{ borderRadius: 8, objectFit: "cover", margin: "2% auto" }}
        alt={`${headline}_picture`}
      />
      <Typography
        fontWeight={500}
        color={colors.blue[900]}
        fontSize={18}
        padding={1}
      >
        {headline}
      </Typography>
      <Typography fontSize={15}>{bit_detail}</Typography>
      <Button
        variant="contained"
        onClick={handleExploreMore}
        style={{ margin: "10% auto 1% auto" }}
      >
        Explore more
      </Button>
    </Card>
  );
}

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
        Our Events
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
        2023/24 Events
      </Typography>
      <Divider />

      {/* ------------------------------- events card ------------------------- */}

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
          {events_data.map((item) => (
            <EventCard
              key={item.sn}
              sn={item.sn}
              theme_pic={item.theme_pic}
              headline={item.headline}
              bit_detail={item.bit_detail}
            />
          ))}
        </div>
      </Grid>
    </Box>
  );
};

export default Events;
