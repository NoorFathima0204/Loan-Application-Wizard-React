import "./ProgressBar.css";

function ProgressBar({ currentStep }) {
  const steps = [
    "Loan Type",
    "Personal Info",
    "KYC",
    "Address",
    "Employment",
    "Co-Applicant",
    "Documents",
    "Review",
  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="progress-wrapper">
      <h2 className="progress-title">
        Customer Onboarding Portal
      </h2>

      <p className="progress-text">
        Step {currentStep} of {steps.length}
      </p>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="steps-row">
        {steps.map((step, index) => (
          <div
            className="step-item"
            key={index}
          >
            <div
              className={`step-circle ${
                currentStep >= index + 1
                  ? "step-active"
                  : "step-inactive"
              }`}
            >
              {index + 1}
            </div>

            <div className="step-label">
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;