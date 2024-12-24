import "../css/menu.css";
import logo from "../assets/logo.png";
function Menu({ setLevel }) {
  return (
    <section className="main--conts" id="menu--cont">
      <img src={logo} id="logo" />
      <h1 id="title">Heroic Recall</h1>
      <ul id="menu--cont">
        <li>Play</li>
        <li>How to Play</li>
        <li>Reset Score</li>
      </ul>
    </section>
  );
}

export default Menu;
