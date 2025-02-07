"use client"

import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "@/src/utils/data";
import {motion} from 'framer-motion'

const Hero = () => {
  const variants = (delay) => ({
    initial : {
      y: "18rem",
    },
    animate : {
      y: "0rem",
      transition : {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay
      }
    }
  })

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
        <img className="h-arrow" src="hero/hero-arrow.png" alt="arrow" />

        <div className="h-container">
          {/* left silde */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div class="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    class="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div class="person-pill" key={i}>
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    class="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* right silde */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You grow your</span>
              <span>Digital Business</span>
            </div>
            <div className="h-des">
              Revenue based funding and execution support designed for early
              stage founders
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
