import React from "react";
import { Image } from "antd";
import { ProjectItem } from "./Item";
import HighLight from "../../components/HighLight";

// linter-guide
import linterGuideScreenshot from "../../assets/screenshots/tq-system.jpg";

import express from "../../assets/icons/express.png";

// tech stack
import react from "../../assets/icons/react.png";
import scss from "../../assets/icons/sass.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import npm from "../../assets/icons/npm.png";
import eslint from "../../assets/icons/eslint.png";
import node from "../../assets/icons/node.png";
import mongo from "../../assets/icons/mongodb.png"

// links
import link from "../../assets/svgs/link.svg";
import github from "../../assets/svgs/github.svg";

// project
export const projects: ProjectItem[] = [
  {
    logo: eslint,
    title: "TQ(technical question) System",
    content: <Image src={linterGuideScreenshot} />,
    description: (
      <div>
        <p>
       
          A website that customers can submit technical ticket of their product. 
          <br/><br/>
          Registered users can login and process tickets to different user role. 
          <br/><br/>
          Used <HighLight isDark>MERN</HighLight> stack.
        </p>
      </div>
    ),
    links: [
      { content: "https://tq-system.web.app/", image: link },
      { content: "https://github.com/Hanqing1234/react-TQ-system", image: github }
    ],
    techUsed: [{ content: "React", image: react  },
    { content: "Node", image: node},
    { content: "Express", image: express },
    { content: "NPM", image: npm },
    { content: "CSS", image: css },
    { content: "JavaScript", image: js },
    { content: "TypeScript", image: mongo },],
    
  },

 
];

export const mdPx = 768;
export const lgPx = 992;
