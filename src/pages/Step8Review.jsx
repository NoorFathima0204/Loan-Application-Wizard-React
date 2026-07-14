import { useState } from "react";
import { useFormData } from "../hooks/useFormData";

function Step8Review() {
  const { formData } = useFormData();

  const [submitted, setSubmitted] = useState(false);

  // Show Success Page after submission
  if (submitted) {
    return (
      <div
        style={{
          maxWidth: "700px",
          margin: "50px auto",
          padding: "40px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: "#f8fff8",
        }}
      >
        <h1 style={{ color: "green" }}>
          ✅ Application Submitted Successfully
        </h1>

        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          Thank you for submitting your loan application.
        </p>

        <p>
          Our verification team will review your application and contact you
          shortly.
        </p>

        <h3 style={{ marginTop: "30px" }}>
          Reference Number:
        </h3>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#0d6efd",
          }}
        >
          LOAN-2026-001
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Review Your Application</h2>

      <hr />

      <h3>Loan Details</h3>

      <p><strong>Loan Type:</strong> {formData.loanType}</p>
      <p><strong>Loan Amount:</strong> ₹ {formData.loanAmount}</p>
      <p><strong>Loan Tenure:</strong> {formData.loanTenure}</p>
      <p><strong>Purpose:</strong> {formData.loanPurpose}</p>

      <hr />

      <h3>Personal Information</h3>

      <p><strong>Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>

      <hr />

      <h3>KYC Details</h3>

      <p><strong>PAN:</strong> {formData.pan}</p>
      <p><strong>Aadhaar:</strong> {formData.aadhaar}</p>
      <p>
        <strong>Consent:</strong>{" "}
        {formData.consent ? "Yes" : "No"}
      </p>

      <hr />

      <h3>Address Details</h3>

      <p><strong>Address Line 1:</strong> {formData.address1}</p>
      <p><strong>Address Line 2:</strong> {formData.address2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>Pincode:</strong> {formData.pincode}</p>
      <p><strong>Country:</strong> {formData.country}</p>

      <hr />

      <h3>Employment Details</h3>

      <p><strong>Employment Type:</strong> {formData.employmentType}</p>

      {formData.companyName && (
        <p><strong>Company Name:</strong> {formData.companyName}</p>
      )}

      {formData.businessName && (
        <p><strong>Business Name:</strong> {formData.businessName}</p>
      )}

      <p><strong>Monthly Income:</strong> ₹ {formData.monthlyIncome}</p>

      <p><strong>Work Experience:</strong> {formData.workExperience}</p>

      <hr />

      <h3>Co-Applicant Details</h3>

      <p><strong>Has Co-Applicant:</strong> {formData.hasCoApplicant}</p>

      {formData.hasCoApplicant === "Yes" && (
        <>
          <p><strong>Name:</strong> {formData.coApplicantName}</p>
          <p><strong>Relationship:</strong> {formData.relationship}</p>
          <p><strong>Mobile:</strong> {formData.coApplicantMobile}</p>
          <p><strong>Annual Income:</strong> ₹ {formData.coApplicantIncome}</p>
        </>
      )}

      <hr />

      <h3>Uploaded Documents</h3>

      <p>
        <strong>PAN Card:</strong>{" "}
        {formData.panDocument?.name || "Not Uploaded"}
      </p>

      <p>
        <strong>Aadhaar Card:</strong>{" "}
        {formData.aadhaarDocument?.name || "Not Uploaded"}
      </p>

      <p>
        <strong>Salary Slip:</strong>{" "}
        {formData.salarySlip?.name || "Not Uploaded"}
      </p>

      <p>
        <strong>Bank Statement:</strong>{" "}
        {formData.bankStatement?.name || "Not Uploaded"}
      </p>

      <br />

      <button
        onClick={() => setSubmitted(true)}
        style={{
          padding: "12px 30px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Submit Application
      </button>
    </div>
  );
}

export default Step8Review;