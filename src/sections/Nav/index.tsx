import React, { FC, useState } from "react";
import { navItems } from "./constants";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import resume from '../../assets/pdf/resume.pdf';

export interface NavItem {
  text: string;
  toEl: string;
}

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState<string>("#home");
  const [verticalVisible, setVerticalVisible] = useState<boolean>(false);

  const scroll = (toEl: string) => {
    const $toEl = document.querySelector(toEl);
    if ($toEl) {
      setActiveItem(toEl);
      $toEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <span>Han</span>
      </div>

      {/* desktop nav */}
      <ul className={styles.horizontal}>
        {navItems.map((nav) => (
          <li
            key={nav.toEl}
            className={classNames({ [styles.active]: nav.toEl === activeItem })}
            onClick={() => scroll(nav.toEl)}
          >
            {nav.text}
          </li>
        ))}
        <li
        >
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>

        {/* Mobile */}
        <li
          className={styles.navBtn}
          onClick={() => setVerticalVisible(!verticalVisible)}
        >
          {verticalVisible ? <CloseOutlined /> : <MenuOutlined />}
        </li>
      </ul>

      {/* mobile nav */}
      {verticalVisible && (
        <ul className={styles.vertical}>
          {navItems.map((nav) => (
            <li
              key={nav.toEl}
              className={classNames({
                [styles.active]: nav.toEl === activeItem,
              })}
              onClick={() => {
                setVerticalVisible(false);
                scroll(nav.toEl);
              }}
            >
              {nav.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
