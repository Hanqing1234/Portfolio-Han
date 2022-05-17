import * as React from "react";
import Masonry from "react-masonry-css";
import Fade from "react-reveal/Fade";
import { Modal, Tabs } from "antd";
import { useState } from "react";
import styles from "./styles.module.scss";
import Title from "../../components/Title";
import Section from "../../components/Section";
import Item from "./Item";
import Button from "../../components/Button";
import { projects } from "./constants";

const Project = () => {

  return (
    <Section id="project" className={styles.project}>
      <Title tag="h1">Project</Title>

      <Masonry
        breakpointCols={{ default: 3, 992: 2, 786: 1 }}
        className={styles.projectList}
        columnClassName={styles.projectListColumn}
      >
        {projects.map((project) => (
          <Item {...project} key={project.logo} />
        ))}

      </Masonry>

      <Title className={styles.footerTitle} tag="h3">
        😋 More funny, interesting projects are on the way. 🕑
      </Title>

    </Section>
  );
};

export default Project;
