import React from "react";
import { FooterSocialMedias, LinkSocialMedias } from "./style";

function RedesSociais() {
  return (
    <FooterSocialMedias>
      <LinkSocialMedias target="_blank" href="https://github.com/fagnerzulin/">
        <i class="fab fa-github fa-2x"></i>
      </LinkSocialMedias>
      <LinkSocialMedias
        target="_blank"
        href="https://www.linkedin.com/in/fagner-zulin/"
      >
        <i class="fab fa-linkedin fa-2x"></i>
      </LinkSocialMedias>
      <LinkSocialMedias
        target="_blank"
        href="https://www.instagram.com/fagnerzulin/"
      >
        <i class="fab fa-instagram fa-2x"></i>
      </LinkSocialMedias>
    </FooterSocialMedias>
  );
}

export default RedesSociais;
