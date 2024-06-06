import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="container header">
      <div className="row">
        <div className="main-header">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, origin: 1 }}
          >
            Donate Your Blood{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, origin: 1 }}
          >
            “Blood Donation will cost you nothing, <br />
            but it will save a life!”
          </motion.p>

          <motion.button
            className="header-btn"
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
              duration: 0.5,
            }}
          >
            <Link to={"/doner"}>Become Doner</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
