import React from "react";
import "../../../../scss/Hud/top/logo/logo.scss";

const Logo = () => {
  const stylesOrnament = {
    boxShadow: " -1px 0px 6px 0px #c4c4c4",
  };

  return (
    <div id="logoCage">
      <div className="cyberOrnament" style={stylesOrnament}></div>
      <div id="logoText">Tariqul</div>
    </div>
  );
};

export default Logo;
