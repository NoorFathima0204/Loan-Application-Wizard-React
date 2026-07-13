import { useState } from "react";

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

  const totalSteps = 8;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      {renderStep()}

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