import React from "react";
import "./HowItWork.css";
import { hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/src/utils/animation";

const HowItWork = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          {/* head section */}
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>

          {/* features section */}
          <div className="hiw-features">
            {hitFeatures.slice(0, 3).map((feature, i) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={i}
              >
                {/* left slide */}
                <motion.div
                initial={{opacity: 0,  x: -100}}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: .7,
                    },
                  }}
                  className="detail"
                >
                  <span className="des">0{i + 1} </span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                {/* right slide */}
                <div className="icon">
                  <Image
                    src={feature.icon}
                    alt="icon"
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
