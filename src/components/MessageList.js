import { getHourMin } from "../services/getHourMin";

const MessageList = ({ messages, currentMember }) => {
  const displayMessage = (message) => {
    const { data, member } = message;
    const myMessage = member.id === currentMember.id;
    const timestamp = getHourMin(message.timestamp);
    const className = myMessage ? "-me" : "";
    return (
      <li className={`Message-content${className}`} key={message.id}>
        <div className={`Message-header${className}`}>
          <div
            className="Avatar"
            style={{ backgroundColor: member.clientData.color }}
          ></div>
          <div className="Username">{member.clientData.username}</div>
        </div>
        <div className={`Message${className}`}>{data.text}</div>
        <div className="Timestamp">
          <span>{timestamp.hour}</span>:<span>{timestamp.min}</span>
        </div>
      </li>
    );
  };

  return (
    <div className="MessageList-container">
      <ul className="MessageList">
        {messages.map((message) => {
          return displayMessage(message);
        })}
      </ul>
    </div>
  );
};

export default MessageList;
