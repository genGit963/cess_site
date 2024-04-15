import { Box, Divider, Typography, colors } from "@mui/material";
import { useParams } from "react-router-dom";
import EventImages from "../components/event-img-view";

const EventsView = () => {
  let { event_id } = useParams();
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
        Event Story In-Depth
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
        Event Title : {event_id}
      </Typography>
      <Divider />
      <Typography
        textAlign="justify"
        style={{
          padding: "2%",
          color: colors.common.black,
          fontWeight: 400,
        }}
      >
        Et eiusmod cillum velit in dolore et mollit anim eu laboris labore nulla
        duis occaecat. Nisi do commodo ea ullamco sunt consectetur voluptate. Et
        incididunt ex sunt labore commodo sunt non est ex in. Voluptate ea elit
        incididunt veniam dolor anim. Excepteur amet sint ipsum amet nulla
        excepteur nulla velit incididunt. Amet est minim nostrud in ipsum
        voluptate laboris laboris voluptate ipsum cillum. Commodo excepteur
        officia labore excepteur nulla esse dolor.
        <br /> <br />
        Minim consequat culpa adipisicing eu aliquip veniam eiusmod et Lorem
        reprehenderit. Mollit commodo nisi id dolor duis ipsum esse in proident
        culpa consectetur. Labore consectetur mollit laboris cupidatat consequat
        sunt nostrud dolore ut amet commodo ea.
        <br /> <br />
        Reprehenderit est sit veniam officia labore fugiat exercitation sit
        ullamco adipisicing eiusmod pariatur. Voluptate cupidatat commodo dolore
        elit. Qui aute commodo eiusmod occaecat in velit reprehenderit id enim.
        Voluptate id excepteur velit ex aliquip officia in magna non nisi
        incididunt et enim. Exercitation ut mollit magna est esse id minim do
        exercitation velit nulla occaecat. Tempor sint ea cillum tempor
        adipisicing duis consectetur reprehenderit dolor qui ullamco incididunt.
        Velit consectetur ea cillum Lorem adipisicing in qui elit esse nulla
        elit enim.
      </Typography>

      {/* -------------------------- event images --------------------- */}
      <div>
        {/* <EventsQuiltedImages /> */}
        <EventImages />
      </div>
    </Box>
  );
};

export default EventsView;
