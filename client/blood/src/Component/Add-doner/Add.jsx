import React, { useState } from "react";
import "./add.css";
import addUser from "../../assets/image/add-user.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Add = () => {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [ano_phone, setAno_phone] = useState("");
  const [Last_date, setLast_date] = useState();
  const [address, setAddress] = useState("");
  const [social, setSocial] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/add-doner", {
        name,
        bloodGroup,
        phone,
        ano_phone,
        address,
        social,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container add-user">
      <div className="row">
        <div className="col-lg-7">
          <motion.div
            className="add-user-img"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={addUser} alt="" />
          </motion.div>
        </div>
        <div className="col-lg-5 justify-content-center align-content-center">
          <div className="add-user-form">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Create Your Profile!</h3>
              <p>
                Help us get to know you better! Fill in your personal details
                below.{" "}
              </p>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="input-div">
                    <input
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-div">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      id=""
                      required
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                    >
                      <option selected value="">
                        Select Your Blood
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="o-">O-</option>
                    </select>
                  </div>
                  <div className="input-div">
                    <input
                      type="text"
                      id="phone"
                      placeholder=" Phone number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="input-div">
                    <input
                      type="text"
                      id="phone"
                      placeholder="Alternative Phone number *(optional)"
                      value={ano_phone}
                      onChange={(e) => setAno_phone(e.target.value)}
                    />
                  </div>

                  <div className="input-div">
                    <input
                      type="text"
                      id="social"
                      placeholder="Facebook Link *(optional)"
                      value={social}
                      onChange={(e) => setSocial(e.target.value)}
                    />
                  </div>

                  <div className="input-div">
                    <textarea
                      rows="2"
                      cols="2"
                      placeholder="Present Address..."
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <button className="form-btn">Add Your Details</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
