import React, { useEffect, useState } from "react";
import "./get.css";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import facebook from "../../assets/image/facebook.png";
import { motion } from "framer-motion";

const GetDoner = () => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  const userData = async () => {
    try {
      await axios
        .get("https://blood-doner-app.onrender.com/get-doner")
        .then((res) => setData(res.data))
        .then((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="container" id="doner_list">
      <div className="row">
        <div className="red-hero-section">
          <div className="red-hero-contain">
            <motion.h1
              initial={{ x: "50vw" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, origin: 1 }}
            >
              Red Hero List
            </motion.h1>
            <SearchBar setResult={setResult} />
          </div>
        </div>
        <div>
          <SearchResult result={result} />
          <hr />
        </div>
        {data.map((item) => (
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

export default GetDoner;
