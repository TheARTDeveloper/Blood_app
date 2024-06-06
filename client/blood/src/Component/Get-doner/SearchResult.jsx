import React from "react";
import "./get.css";
import facebook from "../../assets/image/facebook.png";
import { motion } from "framer-motion";

const SearchResult = ({ result }) => {
  return (
    <div className="container">
      <div className="row">
        {result.map((item) => (
          <motion.div
            className="col-md-3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero">
              <h3>{item.name}</h3>
              <h5>{item.bloodGroup}</h5>
              <h6>{item.phone}</h6>
              <h6>{item.ano_phone}</h6>
              <p>{item.address}</p>

              <a href={item.social}>
                {" "}
                <img className="social-img" src={facebook} alt="" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
