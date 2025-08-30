import { useNavigate } from "react-router";
import Attachment from "../../assets/Attachment.png";
import Microphone from "../../assets/Microphone.png";
import "./TextBar.css";
import { root, useState } from "@lynx-js/react";

const TextBar = () => {
  const nav = useNavigate();
  const [inputContent, setInputContent] = useState("");

  return (
    <view className="TextBar">
      <image src={Attachment} className="MenuBar" bindtap={() => nav("/Home")} />
      <input
        style={{ width: "100%", color: "blue", fontSize: "30px" }}
        placeholder="Search"
        bindinput={(res) => {
          setInputContent(res.detail.value);
        }}
      />
      <image src={Microphone} className="MenuBar" bindtap={() => nav("/Home")} />
    </view>
  );
};

export default TextBar;
