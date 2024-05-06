import React from "react";
import styles from "./styles/Button.module.css";

function Button() {

    return (
        <div className={styles.divven}>
            <a href="#" className={styles.aButton}><span>Button</span><i></i></a>
        </div>
    );
}

export default Button;