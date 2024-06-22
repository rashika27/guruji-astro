import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Navigation from './Navigation';
import styles from '../styles/multistepForm.module.css';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const validateForm = () => {
    let newErrors = {};

    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      }
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) {
        newErrors.zip = 'Zip Code is required';
      } else if (!/^\d{6}$/.test(formData.zip)) {
        newErrors.zip = 'Zip Code must be exactly 6 digits';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      localStorage.removeItem('formData');
    }
  };

  return (
    <div className={styles.multiStepForm}>
      <div className={styles.header}>
        <h1>Welcome to Guruji Astro</h1>
      </div>
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className={styles.stepContainer}>
            <Step1 formData={formData} handleChange={handleChange} errors={errors} />
          </div>
        )}
        {currentStep === 2 && (
          <div className={styles.stepContainer}>
            <Step2 formData={formData} handleChange={handleChange} errors={errors} />
          </div>
        )}
        {currentStep === 3 && (
          <div className={styles.stepContainer}>
            <Step3 formData={formData} />
          </div>
        )}
        <div className={styles.navigationButtons}>
          {currentStep > 1 && (
            <button type="button" onClick={handleBack}>Back</button>
          )}
          {currentStep < 3 && (
            <button type="button" onClick={handleNext}>Next</button>
          )}
          {currentStep === 3 && (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
