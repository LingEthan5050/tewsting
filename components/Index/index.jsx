import React from "react";
import "./Index.css";

function Index(props) {
  const {
    bg,
    theFutureOfCryptoTrading,
    theCryptoTrading,
    nextGen,
    spanText1,
    spanText2,
    spanText3,
    waves,
    services,
    company,
    signIn,
    getStarted,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="index screen">
        <div className="overlap-group1">
          <img className="bg" src={bg} alt="bg" />
          <img className="hero-bg" src="/img/hero-bg@1x.svg" alt="hero-bg" />
          <img className="hero-bg-1" src="/img/hero-bg-1@1x.svg" alt="hero-bg" />
          <div className="landing-text">
            <div className="the-future-of-crypto-trading">{theFutureOfCryptoTrading}</div>
            <div className="overlap-group">
              <h1 className="the-crypto-trading">{theCryptoTrading}</h1>
              <div className="next-gen">{nextGen}</div>
            </div>
            <p className="enjoy-better-rates-w">
              <span className="span0">{spanText1}</span>
              <span className="span1">{spanText2}</span>
              <span className="span2">{spanText3}</span>
            </p>
          </div>
          <img className="bitcoin-logo" src="/img/bitcoin-logo@2x.svg" alt="bitcoin-logo" />
          <div className="nav">
            <div className="logo">
              <img className="vector-1" src="/img/vector-2@2x.svg" alt="Vector" />
              <div className="waves">{waves}</div>
            </div>
            <div className="group-9">
              <div className="group-7">
                <div className="services poppins-medium-white-12px">{services}</div>
                <img className="vector" src="/img/vector@2x.svg" alt="Vector" />
              </div>
              <div className="group-6">
                <div className="company poppins-medium-white-12px">{company}</div>
                <img className="vector" src="/img/vector@2x.svg" alt="Vector" />
              </div>
              <div className="sign-in poppins-medium-white-12px">{signIn}</div>
              <div className="overlap-group-1">
                <div className="get-started poppins-medium-white-12px">{getStarted}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
