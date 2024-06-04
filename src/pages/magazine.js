import { Box, Card, Divider, Typography, colors } from "@mui/material";
import EventImages from "../components/event-img-view";
import { magazine_member_data, participant } from "../data/magazine-data";

const MagazineMemberCard = ({ name, img, asA }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgb(0,0,0,0.15)",
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
      {/* ================= Detail ==================== */}
      <div
        style={{
          margin: "5% auto",
        }}
      >
        <p>
          With a focus on technical expertise and advancements, this magazine
          serves as a premier platform for industry professionals, researchers,
          and enthusiasts to stay abreast of the latest developments and trends
          shaping the discipline. Moreover, the Civil Engineering Voice
          Technical Magazine strives to foster innovation and collaboration
          within the civil engineering community by highlighting groundbreaking
          research, innovative projects, and emerging technologies.{" "}
        </p>
        <br />
        <p>
          CESS 19th committee successfully launched its technical magazine
          <span style={{ fontWeight: "600" }}>
            {" "}
            "Civil Engineering Voice Vol. IV"
          </span>{" "}
          for the fourth time after the long duration of{" "}
          <span style={{ fontWeight: "600", color: "blue" }}>
            {" "}
            6 years on 17th Falgun, 2080
          </span>
          . Thank you so much for the co-operation and deep thanks from the
          bottom of the heart for all the CEV team member for their
          collaboration with CESS 19th committee and all the helping hands,
          sponsors and all professions, seniors, students who supported us with
          their article for the successful publication of the technical
          Magazine. 500 pieces of hardcopy were printed which were distributed
          among the student with free of cost and for different organizations
          form different districts, sponsors and helping hands. And soft copy of
          it is available on National library, CESS Page, CESS Website. This
          magazine from its beginning is a great source of information and
          relentless motivation for aspiring students trying to pursue their
          dream in this field.{" "}
        </p>
        <br />
        <p>
          <span style={{ fontWeight: "600", color: "blue" }}>
            Magazine Executor
          </span>{" "}
          <br />
          Neerajan Basnet (Coordinator) <br />
          Supreme Thapa (Vice Coordinator) <br />
          Newraj Kumar Basnet (Accounting){" "}
        </p>
        <br />
        <p>
          <span style={{ fontWeight: "600", color: "blue" }}>Designer</span>{" "}
          <br />
          Mandip Adhikari <br />
          Riwaj Basnet
          <br />
          Dekendra Baduwal Sijapati
        </p>
        <br />
        <p>
          <span style={{ fontWeight: "600", color: "blue" }}>
            Article Collector
          </span>{" "}
          <br />
          Nagendra Dahal <br />
          Umesh Kumar Gautam <br />
          Kamala G.C
        </p>{" "}
        <br />
        <p>
          <span style={{ fontWeight: "600", color: "blue" }}>
            Advertisement Collector
          </span>{" "}
          <br />
          Jagdish Bist
          <br />
          Manisha Raya
          <br />
          Prajwal Kafle
          <br />
          Avinash Rai
        </p>
      </div>

      <div>
        <Typography textAlign={"center"} variant="h5" color={"rgb(0,0,0,0.70)"}>
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
          variant="h5"
          marginTop={"50px"}
          color={"rgb(0,0,0,0.70)"}
        >
          Lunch Day: 17th Falgun 2080
        </Typography>
        <div
          style={{
            border: "0.5px solid rgb(0,0,0,0.15)",
            marginBottom: "30px",
          }}
        />
        <EventImages img_list={participant} />
      </div>

      {/* Magazine COVER IMAGES */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "10% auto",
          // overflow:"hidden",
          height: "90%",
          // border: "2px solid",
        }}
      >
        <div
          style={{
            zIndex: 1,
            width: "50%",
            transform: "perspective(2500px) scaleZ(1) rotateY(-25deg)",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: 8,
              boxShadow: "0px 0px 15px gray",
            }}
            loading="lazy"
            src={require("../assets/magazine/Mag_front.jpg")}
            alt="font_mag"
          />
        </div>

        <div
          style={{
            // zIndex:1,
            width: "50%",
            transform: "perspective(2500px) scaleZ(1) rotateY(25deg)",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: 8,
              boxShadow: "0px 0px 10px gray",
            }}
            loading="lazy"
            src={require("../assets/magazine/Mag_back.jpg")}
            alt="back_mag"
          />
        </div>
      </div>
    </Box>
  );
};

export default Magazine;
