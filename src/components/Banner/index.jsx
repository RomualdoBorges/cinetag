import React from "react";
import styles from "./Banner.module.css";
// import { ReactComponent as BannerHome } from "../../../public/imagens/banner-home.png";

export default function Banner({ imagem }) {
  return (
    <div
      className={styles.capa}
      style={{
        backgroundImage: `url("imagens/banner-${imagem}.png")`,
      }}
    ></div>
  );
}
