import MorpheusLogo from "../../assets/MorpheusLogo.png";
import { useNavigate } from "react-router";
import "./SplashScreen.css";

export default function SplashScreen() {
  const nav = useNavigate();

  return (
    <>
      <view className="PhoneBackground">
        <image src={MorpheusLogo} className="MorepheusLogo" bindtap={() => nav("/Home")} />
      </view>
    </>
  );
}
