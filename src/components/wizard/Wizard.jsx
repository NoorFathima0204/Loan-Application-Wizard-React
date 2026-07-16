import { useFormData } from "../../hooks/useFormData";
import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
  validateStep6,
  validateStep7,
  validateStep8,
} from "../../utils/validation";

import { useState } from "react";
import "./Wizard.css";

import ProgressBar from "./ProgressBar";
import StepNavigation from "./StepNavigation";

import Step1LoanType from "../../pages/Step1LoanType";
import Step2PersonalInfo from "../../pages/Step2PersonalInfo";
import Step3KYC from "../../pages/Step3KYC";
import Step4Address from "../../pages/Step4Address";
import Step5Employment from "../../pages/Step5Employment";
import Step6CoApplicant from "../../pages/Step6CoApplicant";
import Step7Documents from "../../pages/Step7Documents";
import Step8Review from "../../pages/Step8Review";

function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const { formData, setErrors } = useFormData();

  const totalSteps = 8;

  const nextStep = () => {
    let validationErrors = {};

    switch (currentStep) {
      case 1:
        validationErrors = validateStep1(formData);
        break;
      case 2:
        validationErrors = validateStep2(formData);
        break;
      case 3:
        validationErrors = validateStep3(formData);
        break;
      case 4:
        validationErrors = validateStep4(formData);
        break;
      case 5:
        validationErrors = validateStep5(formData);
        break;
      case 6:
        validationErrors = validateStep6(formData);
        break;
      case 7:
        validationErrors = validateStep7(formData);
        break;
      case 8:
        validationErrors = validateStep8(formData);
        break;
      default:
        validationErrors = {};
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
       return <Step1LoanType />;

      case 2:
        return <Step2PersonalInfo />;

      case 3:
        return <Step3KYC />;

      case 4:
        return <Step4Address />;

      case 5:
        return <Step5Employment />;

      case 6:
        return <Step6CoApplicant />;

      case 7:
        return <Step7Documents />;

      case 8:
        return <Step8Review />;

      default:
        return <h2>Invalid Step</h2>;
    }
  };

  return (
    <div className="wizard-container">
      <div className="wizard-header">
        <h1>Customer Loan Application</h1>
        <p>Complete all 8 steps to submit your loan application.</p>
      </div>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      <div className="wizard-content">{renderStep()}</div>

      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        nextStep={nextStep}
        previousStep={previousStep}
      />
    </div>
  );
}

export default Wizard;