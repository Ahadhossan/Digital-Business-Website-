import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVariants } from "@/src/utils/animation";

const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      class="emailBox"
    >
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
      >
        <LuMail size={30} color="gray" />
      </motion.div>
      <motion.input
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        type="email"
        placeholder="Enter Email"
      />
      <motion.div variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }} class="getFunded">Get Funded</motion.div>
    </motion.div>
  );
};

export default EmailBox;
