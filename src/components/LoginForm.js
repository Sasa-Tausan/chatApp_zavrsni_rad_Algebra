import user from "../img/person.svg";
import color from "../img/color.svg";

const LoginForm = ({ handleUserInput, handleSubmit }) => {
  return (
    <div className="LoginForm">
      <h3 className="LoginForm-title">Login</h3>
      <form className="InputForm" onSubmit={handleSubmit}>
        <div className="InputUser-container">
          <label htmlFor="username">
            <img src={user} alt="Ikona usera" style={{ width: "35px" }} />
          </label>
          <input
            type="text"
            name="username"
            id="user"
            placeholder="Korisničko ime..."
            maxLength="10"
            onChange={handleUserInput}
          />
        </div>
        <div className="PickColor-container">
          <label>
            <img src={color} alt="Ikona usera" style={{ width: "35px" }} />
          </label>
          <input
            type="color"
            name="color"
            id="color"
            onChange={handleUserInput}
          />
          <label htmlFor="color">Odaberite boju za chat</label>
        </div>
        <button className="Btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
