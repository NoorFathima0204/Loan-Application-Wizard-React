import "./StepNavigation.css";

function StepNavigation({
  currentStep,
  totalSteps,
  nextStep,
  previousStep,
}) {
  return (
    <div className="navigation">
      {currentStep > 1 ? (
        <button
          type="button"
          className="nav-btn prev-btn"
          onClick={previousStep}
        >
          ← Previous
        </button>
      ) : (
        <div />
      )}

      {currentStep < totalSteps && (
        <button
          type="button"
          className="nav-btn next-btn"
          onClick={nextStep}
        >
          Next →
        </button>
      )}
    </div>
  );
}

export default StepNavigation;