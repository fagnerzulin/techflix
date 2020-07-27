import React from "react";
import Techflix from "../../assets/img/techflix.png";
import { MenuWrapper, LogoImage } from "./style";
import Button from "../Button";

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={Techflix} alt="Techflix-logo" />
      </a>

      <Button as="a" href="/">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
