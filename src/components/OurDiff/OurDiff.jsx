import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, desVariants, tagVariants, titleVariants } from "@/src/utils/animation";

const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* head section */}
          <div className="od-head">
            <motion.span initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants} className="tag">Our difference</motion.span>
            <motion.span initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants} className="title">Fair capital, hassle free</motion.span>
            <motion.span initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants} className="text">
              Our mission is to level the playing field for early stage growth
              capital.
              <br /> We provide capital that is unbiased, flexible and non
              dilutive with the execution support to accelerate value creation.
            </motion.span>
          </div>
          {/* features section */}
          <div className="od-features">
            {ourDiffFeatures.slice(0, 3).map((feature, i) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(i + 1 * 0.1)}
                className="od-feature"
                key={i}
              >
                <Image src={feature.icon} alt="icon" width={128} height={128} />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
