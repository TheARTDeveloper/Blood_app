import React from "react";
import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 footer-contain">
            <motion.div
              className="footer_blood_bank"
              initial={{ x: "50vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, origin: 1 }}
            >
              <h5>We For You</h5>
              <h6>01845550939</h6>
              <p>Boshurhat Companigonj Naokhali</p>
              <hr />
              <h5>জীবন আলো</h5>
              <h6>01845550939</h6>
              <p>Boshurhat Companigonj Naokhali</p>
              <hr />
            </motion.div>
          </div>
          <motion.div
            className="col-lg-6"
            initial={{ x: "-50vw" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, origin: 1 }}
          >
            <h4>Companigonj Emergency No:</h4>
            <span>Thana:</span>
            <span> 01713-373752</span>
            <br />
            <span>Fire Station:</span>
            <span> 01815-182104</span>
            <br />
            <span>Upazila Hospital: </span>
            <span> 01730-324752</span>
            <hr />

            <h4>National No:</h4>
            <span>Emergency :</span>
            <span> 999</span>
            <br />
            <span>Call Center:</span>
            <span> 333</span>
            <br />
            <span>Ambulance: </span>
            <span> 16263</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
