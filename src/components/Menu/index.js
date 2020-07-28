import React from "react";
import { Link } from "react-router-dom";
import Techflix from "../../assets/img/techflix.png";
import { MenuWrapper, LogoImage } from "./style";
import Button from "../Button";

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Techflix} alt="Techflix-logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
