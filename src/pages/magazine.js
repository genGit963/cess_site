import { Box, Divider, Typography, colors } from "@mui/material";
import { magazine_photo } from "../assets/magazine/data";
import EventImages from "../components/event-img-view";

const Magazine = () => {
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
        Civil Magazine Voice
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
        Our Magazine 2024
      </Typography>
      <Divider />
      <Typography margin={"2% auto"} textAlign={"justify"}>
        Ullamco dolor in culpa quis occaecat. Sunt proident officia veniam id
        mollit. Excepteur culpa laborum qui aute fugiat mollit ullamco eiusmod
        nulla sint consectetur laborum proident cupidatat. Et minim culpa aute
        occaecat sint mollit magna adipisicing elit enim aliquip. Non
        adipisicing ullamco proident ipsum qui nostrud ipsum commodo minim. Sunt
        culpa sint laboris nulla non velit. Laboris mollit esse ullamco magna
        esse occaecat sunt. Fugiat tempor minim do pariatur.
        <br />
        <br /> Eu id quis minim qui Lorem deserunt laborum nisi aute anim et
        velit anim. Mollit adipisicing deserunt duis cupidatat dolor commodo
        nulla ea ad dolor ex id. Sunt laboris Lorem nostrud labore velit
        adipisicing esse cupidatat. Elit est id elit commodo consequat culpa
        cillum sint cillum ullamco ex culpa. Consequat culpa magna ut irure
        duis.
        <br />
        <br />
        Lorem dolore excepteur adipisicing est qui sint ullamco. Dolore aute
        ullamco occaecat consectetur sint quis commodo dolor enim voluptate
        consequat laborum sit. Voluptate ipsum aute sint culpa non. Labore eu id
        occaecat irure consectetur sit aliquip amet ea est proident. Cupidatat
        tempor sint labore culpa. Minim velit incididunt ex occaecat amet ipsum
        et. Cupidatat mollit reprehenderit cupidatat sit consequat voluptate
        eiusmod incididunt. Dolor Lorem excepteur minim aute minim fugiat dolore
        minim labore aliqua pariatur.
      </Typography>
      <div>
        <EventImages img_list={magazine_photo} />
      </div>
    </Box>
  );
};

export default Magazine;
