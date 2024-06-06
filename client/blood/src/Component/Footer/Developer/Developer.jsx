import React from "react";
import "../footer.css";
import { motion } from "framer-motion";

const Developer = () => {
  return (
    <motion.div
      initial={{ y: "-40px" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, origin: 1 }}
    >
      <div className="developer">
        <div className="developer_contain">
          <p>
            ©copyrights & Developed By AR Tahmid ||{" "}
            <span className="ancor">
              {" "}
              <a href="https://www.facebook.com/profile.php?id=61554903244756&amp;mibextid=ZbWKwL">
                The ART developer
              </a>
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Developer;
