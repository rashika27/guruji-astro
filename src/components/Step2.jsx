import React from 'react';
import styles from '../styles/step2.module.css';

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className={styles.step}>
      <h2>Address Information</h2>
      <div className={styles.formGroup}>
        <label>Address Line 1:</label>
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className={errors.address1 ? styles.error : ''}
        />
        {errors.address1 && <p className={styles.errorMsg}>{errors.address1}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Address Line 2:</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? styles.error : ''}
        />
        {errors.city && <p className={styles.errorMsg}>{errors.city}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={errors.state ? styles.error : ''}
        />
        {errors.state && <p className={styles.errorMsg}>{errors.state}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Zip Code:</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className={errors.zip ? styles.error : ''}
        />
        {errors.zip && <p className={styles.errorMsg}>{errors.zip}</p>}
      </div>
    </div>
  );
};

export default Step2;
