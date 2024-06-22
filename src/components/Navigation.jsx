import React from 'react';
import styles from '../styles/navigation.module.css';

const Navigation = ({ currentStep, setCurrentStep }) => {
  return (
    <div className={styles.navigation}>
      <div className={currentStep === 1 ? styles.active : ''} onClick={() => setCurrentStep(1)}>Step 1</div>
      <div className={currentStep === 2 ? styles.active : ''} onClick={() => setCurrentStep(2)}>Step 2</div>
      <div className={currentStep === 3 ? styles.active : ''} onClick={() => setCurrentStep(3)}>Step 3</div>
    </div>
  );
};

export default Navigation;
