import { useFormData } from "../hooks/useFormData";

function Step8Review() {
  const { formData } = useFormData();

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

      <h3>KYC</h3>

      <p><strong>PAN:</strong> {formData.pan}</p>
      <p><strong>Aadhaar:</strong> {formData.aadhaar}</p>
      <p>
        <strong>Consent:</strong>{" "}
        {formData.consent ? "Yes" : "No"}
      </p>

      <hr />

      <h3>Address</h3>

      <p><strong>Address Line 1:</strong> {formData.address1}</p>
      <p><strong>Address Line 2:</strong> {formData.address2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>Pincode:</strong> {formData.pincode}</p>
      <p><strong>Country:</strong> {formData.country}</p>

      <hr />

      <h3>Employment</h3>

      <p><strong>Employment Type:</strong> {formData.employmentType}</p>

      {formData.companyName && (
        <p><strong>Company:</strong> {formData.companyName}</p>
      )}

      {formData.businessName && (
        <p><strong>Business:</strong> {formData.businessName}</p>
      )}

      <p><strong>Monthly Income:</strong> ₹ {formData.monthlyIncome}</p>

      <p><strong>Experience:</strong> {formData.workExperience}</p>

      <hr />

      <h3>Co-Applicant</h3>

      <p><strong>Has Co-Applicant:</strong> {formData.hasCoApplicant}</p>

      {formData.hasCoApplicant === "Yes" && (
        <>
          <p><strong>Name:</strong> {formData.coApplicantName}</p>

          <p><strong>Relationship:</strong> {formData.relationship}</p>

          <p><strong>Mobile:</strong> {formData.coApplicantMobile}</p>

          <p><strong>Income:</strong> ₹ {formData.coApplicantIncome}</p>
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
        style={{
          padding: "12px 30px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => alert("Application Submitted Successfully!")}
      >
        Submit Application
      </button>
    </div>
  );
}

export default Step8Review;