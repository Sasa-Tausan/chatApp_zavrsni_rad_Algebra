import logo from "../img/logo.png";
import _ from "lodash";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import ChatRoom from "./ChatRoom";

const ChatApp = () => {
  const [loggedUser, setLoggedUser] = useState({
    username: "",
    color: "#000000",
  });
  const [isLogged, setIsLogged] = useState(false);

  const handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoggedUser((loggedUser) => ({ ...loggedUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loggedUser.username) {
      setIsLogged(true);
      setLoggedUser((loggedUser) => ({
        ...loggedUser,
        username: _.capitalize(loggedUser.username),
      }));
    } else {
      alert("Morate upisati korisnika");
    }
  };

  return (
    <div className="ChatApp">
      <div className="ChatApp-header">
        <img src={logo} alt="Logo aplikacije Chat_učenje" className="Logo" />
        <h1 className="Main-title">Chat_učenje</h1>
      </div>
      {!isLogged && (
        <LoginForm
          handleUserInput={handleUserInput}
          handleSubmit={handleSubmit}
        />
      )}
      {isLogged && <ChatRoom loggedUser={loggedUser} />}
    </div>
  );
};

export default ChatApp;
