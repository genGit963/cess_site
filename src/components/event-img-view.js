import { useState } from "react";
import "./components.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { colors } from "@mui/material";


const EventImages = ({img_list}) => {
  const [model, setModel] = useState(false);
  const [temImg, setTemImg] = useState("");
  const getImg = (img_url) => {
    setModel(true);
    setTemImg(img_url);
  };
  // console.log(model, temImg);

  return (
    <>
      <div className={model ? "open" : "model"}>
        <div className="close_icon" onClick={() => setModel(false)}>
          <CloseRoundedIcon
            color={colors.blue[50]}
            sx={{
              alignContent: "center",
              alignItems: "center",
              height: "40px",
              width: "40px",
              position:"absolute",
              top:"3%",
              right:"2%"
            }}
          />
        </div>
        <img
          className="model_img"
          src={temImg}
          alt="open_img"
          loading="lazy"
          // onDoubleClick={setModel(false)}
        />
      </div>

      <div className="gallery">
        {img_list.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item)}>
              <img
              loading="lazy"
                src={item}
                style={{ width: "100%", borderRadius: 10 }}
                alt="event_images"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventImages;
