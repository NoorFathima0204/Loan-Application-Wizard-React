import "./StepNavigation.css";

function StepNavigation({
  currentStep,
  nextStep,
  previousStep,
}) {
  return (
    <div className="navigation">
      {currentStep > 1 ? (
        <button
          className="nav-btn prev-btn"
          onClick={previousStep}
        >
          ← Previous
        </button>
      ) : (
        <div />
      )}

      {currentStep < 8 && (
  <button
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