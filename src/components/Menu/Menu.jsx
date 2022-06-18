import { slide as Menu } from 'react-burger-menu'
import * as React from "react";
import "./Menu.css";
class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/home">Home</a>
        <a id="about" className="menu-item" href="/patient_filter">Dashboard pacientes</a>
        <a id="contact" className="menu-item" href="/hospital_filter">Dashboard hospitais</a>
        <a id="contact" className="menu-item" href="/pacientes">Pacientes cadastrados</a>
        <a id="contact" className="menu-item" href="/">Sair</a>
        <a id="contact" className="menu-item" href="/contact">Suporte</a>
      </Menu>
    );
  }
}
export default Example;