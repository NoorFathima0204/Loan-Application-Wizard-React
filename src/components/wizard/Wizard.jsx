import ProgressBar from "./ProgressBar";
import StepNavigation from "./StepNavigation";
import { useState } from "react";

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

  const nextStep = () => {
    if (currentStep < 8) {
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
        return <Step1LoanType />;
    }
  };

  return (
  <div>
    <h1>Loan Application Form</h1>

    <ProgressBar currentStep={currentStep} />

    <h3>
      Step {currentStep} of 8
    </h3>

    {renderStep()}

    <br />

    <StepNavigation
      currentStep={currentStep}
      nextStep={nextStep}
      previousStep={previousStep}
    />
  </div>
);
}

export default Wizard;