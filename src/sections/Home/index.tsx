import React, { FC } from "react";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import useTyped from "../../hooks/useTyped";
import useLottie from "../../hooks/useLottie";
import { arrowDownLottie, sheepLottie } from "./constants";

const strings = ["play football.", " play video games🎮.", "do outdoor activities🏕️."];

const Home: FC = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const sheepLottieRef = useLottie(sheepLottie);

  const next = () => {
    const $project = document.querySelector("#project");
    if ($project) {
      $project.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>I'm Han,</p>
          <p>
            
            <span className={styles.react}>a front-end </span> developer.
          </p>
          <br/>
          <br/>
          <p>I like to design websites,</p>
          <p>
            sometimes&nbsp;
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={sheepLottieRef} />
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
