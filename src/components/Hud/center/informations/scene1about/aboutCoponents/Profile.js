import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <div id="ProfileContener">
      <div className="profileTittle">
        {props.languageSet === "en" ? "Full Name" : null}
        {props.languageSet === "pl" ? "Imię i Nazwisko" : null}
      </div>
      <div className="profileText">Tariqul Islam</div>

      <div id="profileSeparate">
        <div className="profileTittle">
          {props.languageSet === "en" ? "SPECIALIZATION" : null}
          {props.languageSet === "pl" ? "specjalizacja" : null}
        </div>
        <div className="profileText">Full Stack Web Developer | MERN Stack Developer | Researcher</div>
      </div>

      <div className="profileTittle">
        {props.languageSet === "en" ? "SHORT STORY" : null}
        {props.languageSet === "pl" ? "krótka historia" : null}
      </div>
      <div className="profileText">
        {props.languageSet === "en"
          ? `I'm a full-stack Web Application Developer. I'm doing a BSc in CSE from DIU. My primary focus and inspiration for my studies are Web Development.`
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    languageSet: state.lang.languageSet,
  };
};

export default connect(mapStateToProps)(React.memo(Profile));
