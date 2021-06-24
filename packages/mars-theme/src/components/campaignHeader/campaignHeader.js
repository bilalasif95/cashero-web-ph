import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "../link";
import Logo from "../../assets/logo.svg";

const CampaignHeader = ({ state }) => {
  const data = state.source.get(state.router.link);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, []);
  return (
    <div className={`${scrolled ? "active header" : "header"}`} id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light customNav campaignHeader">
          <Link link={data.link} className="navbar-brand">
            <img className="Logo" alt="Logo" src={Logo} />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default connect(CampaignHeader);