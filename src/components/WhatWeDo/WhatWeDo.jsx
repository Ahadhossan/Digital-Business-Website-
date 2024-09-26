"use client"

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, titleVariants, tagVariants, desVariants } from "@/src/utils/animation";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        {/* 1st part */}
        <div className="wwd-container">
          {/* head section */}
          <div class="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              class="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              class="title"
            >
              Empowering founders with non dilutive capital and execution
              expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              class="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>
          {/* blocks section */}
          <div className="wwd-blocks">
            {/* 1st block section */}
            <div className="wwd-block">
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                class="sec-title"
              >
                Blue Adnavces
              </motion.span>
              <motion.span
                variants={desVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                class="text"
              >
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </motion.span>
              {/* block features section */}
              <div class="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(i + 1 * 0.1)}
                    class="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* 2nd block section */}
            <div className="wwd-block">
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                class="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                variants={desVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                class="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>
              {/* block features section */}
              <div class="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(i + 1 * 0.1)}
                    class="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 2nd part */}
        {/* support section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={containerVariants(0.3)}
          class="wwd-support"
        >
          <div>
            <span class="sec-title">Blue Growth Support</span>
            <span class="des">
              Data Insights and full stack expertise to supercharge growth
            </span>
          </div>
          <div>
            <span class="text">
              Actionable data insights by connecting revenue, marketing and
              social media platforms
            </span>
            <span class="text">
              On demand execution expertise at cost or revenue share across
              proposition design, engineering, marketing analytics,
              partnerships, brand, intellectual property, market expansion,
              talent management
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
