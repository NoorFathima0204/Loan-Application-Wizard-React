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

  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Application Progress</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              width: "100px",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                margin: "0 auto",
                lineHeight: "35px",
                backgroundColor:
                  currentStep >= index + 1 ? "#1F4E79" : "#d3d3d3",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {index + 1}
            </div>

            <p style={{ fontSize: "12px" }}>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;