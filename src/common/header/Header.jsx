import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";

import shrinkHeader from "./helpers/shrinkHeader";
import headerNav from "./helpers/headerNav";

import "./header.scss";
import logo from "../../assets/tmovie.png";

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const activeItem = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    window.addEventListener("scroll", () => shrinkHeader(headerRef));
    return () => {
      window.removeEventListener("scroll", () => shrinkHeader(headerRef));
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="#" />
          <Link to="/">MyMuvies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, i) => (
            <li
              key={item.id}
              className={classNames({
                active: i === activeItem,
              })}
            >
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
          <ScrollToTop />
        </ul>
      </div>
    </div>
  );
};

export default Header;
