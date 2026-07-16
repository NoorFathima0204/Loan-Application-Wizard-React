import { useFormHandlers } from "../hooks/useFormHandlers";

function Step6CoApplicant() {
  const { formData, errors, handleChange } = useFormHandlers();

  return (
    <div className="step-container">
      <h2>Step 6: Co-Applicant Details</h2>

      <div className="form-group">
        <label>Do you have a Co-Applicant?</label>

        <label>
          <input
            type="radio"
            name="hasCoApplicant"
            value="Yes"
            checked={formData.hasCoApplicant === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="hasCoApplicant"
            value="No"
            checked={formData.hasCoApplicant === "No"}
            onChange={handleChange}
          />
          No
        </label>

        {errors.hasCoApplicant && (
          <p className="error">{errors.hasCoApplicant}</p>
        )}
      </div>

      {formData.hasCoApplicant === "Yes" && (
        <>
          <div className="form-group">
            <label>Co-Applicant Name</label>

            <input
              type="text"
              name="coApplicantName"
              value={formData.coApplicantName}
              onChange={handleChange}
              placeholder="Enter Name"
            />

            {errors.coApplicantName && (
              <p className="error">{errors.coApplicantName}</p>
            )}
          </div>

          <div className="form-group">
            <label>Relationship</label>

            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              placeholder="Father / Mother / Spouse / Sibling"
            />

            {errors.relationship && (
              <p className="error">{errors.relationship}</p>
            )}
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="coApplicantMobile"
              value={formData.coApplicantMobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />

            {errors.coApplicantMobile && (
              <p className="error">{errors.coApplicantMobile}</p>
            )}
          </div>

          <div className="form-group">
            <label>Annual Income (₹)</label>

            <input
              type="number"
              name="coApplicantIncome"
              value={formData.coApplicantIncome}
              onChange={handleChange}
              placeholder="Enter Annual Income"
            />

            {errors.coApplicantIncome && (
              <p className="error">{errors.coApplicantIncome}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Step6CoApplicant;