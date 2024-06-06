import React from "react";
import Header from "../Header/Header";
import GetDoner from "../Get-doner/GetDoner";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Developer from "../Footer/Developer/Developer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Header />
      <GetDoner />
      <Footer />
      <Developer />
    </motion.div>
  );
};

export default Home;
