import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ setResult }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      await fetch("http://localhost:3001/get-doner")
        .then((res) => res.json())
        .then((json) => {
          const result = json.filter((user) => {
            return (
              user &&
              user.bloodGroup &&
              user.bloodGroup.toUpperCase().includes(value)
            );
          });
          setResult(result);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <motion.div
      initial={{ x: "-50vw" }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1, origin: 1 }}
    >
      <div className="input-div">
        <label htmlFor="select">You need Blood? </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="select"
          required
          value={input}
          onChange={(e) => handleInput(e.target.value)}
        >
          <option selected value="k">
            Select Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
    </motion.div>
  );
};

export default SearchBar;
