import './Loader.css';
import logo from "./loader.png";
export default function Loader() {
  // state
  // comportements
  // affichage (render)
  return (
    <div className="Loader">
      <h1>Chargement des données</h1>
      <img src={logo} className="App-logo App-logo-drop" alt="logo" />
    </div>
  );
}
