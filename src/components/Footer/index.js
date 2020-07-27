import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/techflix.png";
import RedesSociais from "./components/RedesSociais";

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img
          style={{ height: "60px", with: "80px" }}
          src={Logo}
          alt="Logo TechFlix"
        />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
      <p>Desenvolvido por: Fagner Zulin</p>
      <RedesSociais />
    </FooterBase>
  );
}

export default Footer;
