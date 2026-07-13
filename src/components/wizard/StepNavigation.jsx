function StepNavigation({
  currentStep,
  nextStep,
  previousStep,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
      }}
    >
      {currentStep > 1 ? (
        <button onClick={previousStep}>
          ← Previous
        </button>
      ) : (
        <div></div>
      )}

      {currentStep < 8 ? (
        <button onClick={nextStep}>
          Next →
        </button>
      ) : (
        <button>
          Submit
        </button>
      )}
    </div>
  );
}

export default StepNavigation;