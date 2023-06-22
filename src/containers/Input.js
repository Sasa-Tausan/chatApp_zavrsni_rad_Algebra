import { useState } from "react";

const Input = ({ handleMessage }) => {
  const [message, setMessage] = useState({ text: "" });

  const sendMessageOnEnter = (event) => {
    if (event.key === "Enter") sendMessage();
  };

  const getMessage = (event) => {
    setMessage((message) => ({ ...message, text: event.target.value }));
  };

  const sendMessage = (event) => {
    if (message.text) {
      setMessage(message);
      handleMessage(message);
      resetMessage();
    } else {
      alert("Moraš upisati poruku");
    }
  };

  const resetMessage = () => {
    setMessage({ text: "" });
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Upiši poruku i pritisni enter ili gumb pošalji"
        className="InputMessage"
        onChange={getMessage}
        onKeyDown={sendMessageOnEnter}
        value={message.text}
      />
      <button onClick={sendMessage} className="Btn-send">
        Pošalji
      </button>
    </div>
  );
};

export default Input;
