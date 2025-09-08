import React from "react";
import styles from "./style.module.css";

const SkipToContent: React.FC = () => {
  return (
    <a className={styles.skipLink} href="#main-content">
      Skip to main content
    </a>
  );
};

export default SkipToContent;
