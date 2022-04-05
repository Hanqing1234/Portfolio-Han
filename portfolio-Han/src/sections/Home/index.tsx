import React, { FC } from "react";
import { Col, Row } from "antd";
import styles from './styles.module.scss';


const Home: FC = () => {

  return <section id="home" className={styles.home}>
  <Row className={styles.content}>
    <Col span={24} md={15} className={styles.intro}>
      <p>My name is Han，</p>
      <p>
        a front-end developer，mainly write{" "}
        <span className={styles.react}>React</span>.
      </p>
      <p>Like writing web apps,，</p>
      <p>
        Sometimes
        <span className={styles.sometime}  />
      </p>
    </Col>

    <Col span={24} md={9} className={styles.ballWrapper}>

    </Col>

    <Col className={styles.next} span={24}>

    </Col>
  </Row>
</section>;
};

export default Home;
