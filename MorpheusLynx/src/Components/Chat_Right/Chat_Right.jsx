import { useNavigate } from "react-router";
import "./Chat_Right.css";

const Chat_Right = () => {
  const nav = useNavigate();

  return (
    <view>
      <view className="Chat-Right">
        <text>Home Home Home Home Home Home Home</text>
      </view>

      <view className="Chat-Left">
        <text>Home Home Home Home Home Home Homea</text>
      </view>
    </view>
  );
};

export default Chat_Right;
