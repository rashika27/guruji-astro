import React from 'react';
import styles from '../styles/step1.module.css';

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div className={styles.step}>
      <h2>Personal Information</h2>
      <div className={styles.formGroup}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.error : ''}
        />
        {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.error : ''}
        />
        {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? styles.error : ''}
        />
        {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Step1;
