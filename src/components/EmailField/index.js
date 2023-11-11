import React from 'react';
import styles from './index.module.css';

const EmailField = ({ label, value, onChange }) => {
  return (
    <div className={styles.emailField}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="email"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default EmailField;
