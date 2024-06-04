import { Box, Card, Divider, Typography, colors } from "@mui/material";
import EventImages from "../components/event-img-view";
import { magazine_member_data, participant } from "../data/magazine-data";

const MagazineMemberCard = ({ name, img, asA }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        // border: "1px solid",
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 0px 10px rgb(0,0,0,0.12)",
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <img
        style={{
          height: 240,
          width: 240,
          objectFit: "cover",
          borderRadius: 3,
        }}
        src={img}
        alt={"img" + name}
        loading="lazy"
      />
      <div style={{ marginTop: 10 }}>
        <Typography
          fontSize={16}
          textAlign={"center"}
          fontWeight={"500"}
          color={"rgb(0,0,0,0.68)"}
        >
          {name}
        </Typography>
        <Typography textAlign="center" color={"gray"} fontSize={14}>
          {asA}
        </Typography>
      </div>
    </Card>
  );
};
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
        Our Magazine
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
        Civil Engineering Voice Vol.IV
      </Typography>
      <Divider />
      <Typography margin={"2.5%"} textAlign={"justify"}>
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "5% auto",
          width: "100%",
          border: "1px solid",
        }}
      >
        <img
          style={{ height: "auto", width: "50%", objectFit: "cover", margin:"auto" }}
          loading="lazy"
          src={require("../assets/magazine/Mag_front.jpg")}
          alt="font_mag"
        />
        <img
          style={{ height: "auto", width: "45%", objectFit: "cover", margin:"auto"}}
          loading="lazy"
          src={require("../assets/magazine/Mag_back.jpg")}
          alt="font_mag"
        />
      </div>

      <div>
        <Typography textAlign={"center"} variant="h4" color={"rgb(0,0,0,0.70)"}>
          Magazine Team Members
        </Typography>
        <div
          style={{
            border: "0.5px solid rgb(0,0,0,0.15)",
            marginBottom: "30px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {magazine_member_data.map((item) => (
            <MagazineMemberCard
              key={item.name}
              name={item.name}
              img={item.img}
              asA={item.asA}
            />
          ))}
        </div>
        <Typography
          textAlign={"center"}
          variant="h4"
          marginTop={"50px"}
          color={"rgb(0,0,0,0.70)"}
        >
          Lunch Day
        </Typography>
        <div
          style={{
            border: "0.5px solid rgb(0,0,0,0.15)",
            marginBottom: "30px",
          }}
        />
        <EventImages img_list={participant} />
      </div>
    </Box>
  );
};

export default Magazine;
