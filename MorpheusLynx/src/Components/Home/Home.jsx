import { useNavigate } from "react-router";
import TopBar from "../TopBar/TopBar.jsx";
import TextBar from "../TextBar/TextBar.jsx";
import "./Home.css";

const Home = () => {
  const nav = useNavigate();
  const [messages, setMessages] = useState([]);
  const [responses] = useState(["Okay!", "Noted!"]);

  const handleSendMessage = (messageText) => {
    if (!messageText.trim()) return;

    // Add user message
    const newMessage = {
      id: Date.now(),
      text: messageText,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate response after a short delay
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        type: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <view className="Container Background-Yellow">
      <TopBar />
      <view className="ChatArea">
        <text className="Chat-Right">Get me MSTR</text>
        <text className="Chat-Left">ASdasda</text>
      </view>
      <TextBar />
    </view>
  );
};

export default Home;
