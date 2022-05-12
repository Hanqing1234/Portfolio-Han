import React from "react";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Title from "../../components/Title";
import styles from "./styles.module.scss";
import { contacts } from "./constants";
import { detectMobile } from "../../utils";

const isMobile = detectMobile();
const emailStr =
  "mailto:liuhq1016@gmail.com?body=Hi Hanqing: ";

const Contact = () => (
  <Section
    id="contact"
    className={styles.contact}
    style={{ backgroundAttachment: isMobile ? "initial" : "fixed" }}
  >
    <Title tag="h2">Find Me 🙋‍♂️</Title>

    <Fade bottom>
      <div className={styles.container}>
        <ul className={styles.contactList}>
          {contacts.map((contact) => (
            <li key={contact.image}>
              <a href={contact.url} target="_blank" rel="noreferrer">
                <img src={contact.image} alt="contactImage" />
              </a>
            </li>
          ))}
        </ul>

        <RubberBand top>
          <p className={styles.subTitle}>
            👍 Email Me
          </p>
        </RubberBand>

        <Button
          onClick={() => (window.location.href = emailStr)}
          className={styles.emailBtn}
          bg="#7d0000"
        >
          liuhq1016@gmail.com
        </Button>
      </div>
    </Fade>
  </Section>
);

export default Contact;
