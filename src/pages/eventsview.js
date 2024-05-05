import { Box, Divider, Typography, colors } from "@mui/material";
import { useParams } from "react-router-dom";
import EventImages from "../components/event-img-view";
import { events_data } from "../data/events-data";
// import erc_run from "../assets/CESS/erc_run/"

const EventsView = () => {
  let { event_id } = useParams();
  const eventData = events_data.filter(
    (event) => event.sn === Number(event_id)
  );

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
        Events in Depth
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
        {eventData[0].headline}
      </Typography>
      <Divider />
      <div
        style={{
          textAlign: "justify",
          padding: "2%",
          color: colors.common.black,
          fontWeight: 400,
        }}
      >
        {eventData[0].in_depth}
      </div>

      {/* -------------------------- event images --------------------- */}
      <div style={{margin:"30px auto"}}>
        {/* <EventsQuiltedImages /> */}
        <EventImages img_list={eventData[0].images} />
      </div>
    </Box>
  );
};

export default EventsView;
