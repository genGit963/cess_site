import { useState } from "react";
import "./components.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { colors } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const EventImages = () => {
  const [model, setModel] = useState(false);
  const [temImg, setTemImg] = useState("");
  const getImg = (img_url) => {
    setModel(true);
    setTemImg(img_url);
  };
  console.log(model, temImg);

  return (
    <>
      <div className={model ? "open" : "model"}>
        <div className="close_icon" onClick={() => setModel(false)}>
          <CloseRoundedIcon
            color={colors.blue[50]}
            sx={{ alignContent: "center", alignItems: "center", height:'40px', width:"40px" }}
          />
        </div>
        <img className="model_img" src={temImg} alt="open_img" />
      </div>

      <div className="gallery">
        {itemData.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.img)}>
              <img
                src={item.img}
                style={{ width: "100%", borderRadius: 3 }}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventImages;
