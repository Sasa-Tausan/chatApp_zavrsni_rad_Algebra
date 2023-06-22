import { useState, useEffect } from "react";
import MessageList from "../components/MessageList";
import Input from "./Input";

const ChatRoom = ({ loggedUser }) => {
  const [currentMember, setCurrentMember] = useState(loggedUser);
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const drone = new window.Scaledrone("z9fNLDZifzXjXy75", {
      data: loggedUser,
    });
    setDrone(drone);

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      setCurrentMember((currentMember) => ({
        ...currentMember,
        id: drone.clientId,
      }));
    });
    const room = drone.subscribe("observable-room");
    setRoom(room);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (drone && room) {
      room.on("message", (message) => {
        setMessages((messages) => [...messages, message]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drone, room]);

  const handleMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="ChatRoom">
      <MessageList messages={messages} currentMember={currentMember} />
      <Input handleMessage={handleMessage} />
    </div>
  );
};

export default ChatRoom;
