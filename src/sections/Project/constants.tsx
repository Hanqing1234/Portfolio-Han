import React from "react";
import { Image } from "antd";
import { ProjectItem } from "./Item";
import HighLight from "../../components/HighLight";

// screenshot
import tqSite from "../../assets/screenshots/tq-system.jpg";
import surveySite from "../../assets/screenshots/survey-site.jpg";
import placeWeb from "../../assets/screenshots/place.jpg"

import express from "../../assets/icons/express.jpg";

// tech stack
import react from "../../assets/icons/react.png";
import scss from "../../assets/icons/sass.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import npm from "../../assets/icons/npm.png";
import mern from "../../assets/icons/mern.png";
import node from "../../assets/icons/node.png";
import mongo from "../../assets/icons/mongodb.png";
import ejs from "../../assets/icons/ejs.jpg";
import html from "../../assets/icons/html.png";


// links
import link from "../../assets/svgs/link.svg";
import github from "../../assets/svgs/github.svg";

// project
export const projects: ProjectItem[] = [
  {
    logo: mern,
    title: "TQ(technical question) System",
    content: <Image src={tqSite} />,
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
    techUsed: [
    { content: "React", image: react  },
    { content: "Node", image: node},
    { content: "Express", image: express },
    { content: "CSS", image: css },
    { content: "JavaScript", image: js },
    { content: "MongoDB", image: mongo },
  ],
  },
  {
    logo: express,
    title: "Survey Management",
    content: <Image src={surveySite} />,
    description: (
      <div>
        <p>
        A website that registered users can manage surveys.
          <br/><br/>
          Anyone can take the survey and the result will be showed to the user who create this survey.
          <br/><br/>
          Used <HighLight isDark>EJS template</HighLight> as frontend, <HighLight isDark>Express.js, Node.js, MongoDB</HighLight> as backend.
        </p>
      </div>
    ),
    links: [
      { content: "https://survey-site-project.herokuapp.com/", image: link },
      { content: "https://github.com/Hanqing1234/survey-management-project", image: github }
    ],
    techUsed: [
    { content: "HTML5", image: html },  
    { content: "EJS", image: ejs  },
    { content: "Node", image: node},
    { content: "Express", image: express },
    { content: "CSS", image: css },
    { content: "JavaScript", image: js },
    { content: "MongoDB", image: mongo },],
  },
  {
    logo: mern,
    title: "Places Share website",
    content: <Image src={placeWeb} />,
    description: (
      <div>
        <p>
        A simple website that users share places pictures.
         Registered users can create, update, read and delete their places.
         <br/>
         <br/>
          Used <HighLight isDark>MERN</HighLight> stack.
        </p>
      </div>
    ),
    links: [
      { content: "https://mern-version1.web.app", image: link },
      { content: "https://github.com/Hanqing1234/places-share-web", image: github }
    ],
    techUsed: [{ content: "React", image: react  },
    { content: "Node", image: node},
    { content: "Express", image: express },
    { content: "JavaScript", image: js },
    { content: "MongoDB", image: mongo },],
  },
  

 
];

export const mdPx = 768;
export const lgPx = 992;
