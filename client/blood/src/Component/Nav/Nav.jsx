import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/image/blood.png";
import { motion } from "framer-motion";

const Nav = () => {
  const [menu, setMenu] = useState("");
  return (
    <nav>
      <motion.div
        className="logo"
        initial={{ y: "-60px" }}
        whileInView={{ y: "60px" }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
          duration: 1,
        }}
      >
        <img src={logo} alt="" />
      </motion.div>
      <div className="menu">
        <ul>
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              to={"/"}
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
          </motion.li>

          <motion.li
            id="doner"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              to={"/doner"}
              onClick={() => setMenu("doner")}
              className={menu === "doner" ? "active" : ""}
            >
              Become Doner
            </Link>
            <div className="dot"></div>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
