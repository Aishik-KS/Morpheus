import MenuBar from "../../assets/MenuBar.png";
import Avatar from "../../assets/Avatar.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      <view className="TopArea">
        <image src={MenuBar} className="MenuBar" bindtap={() => nav("/Home")} />
        <image src={Avatar} className="Avatar" bindtap={() => nav("/Home")} />
      </view>
    </>
  );
};

export default TopBar;
