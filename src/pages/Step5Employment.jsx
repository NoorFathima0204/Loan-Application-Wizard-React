import { useFormHandlers } from "../hooks/useFormHandlers";

function Step5Employment() {
  const { formData, errors, handleChange } = useFormHandlers();

  return (
    <div className="step-container">
      <h2>Step 5: Employment Details</h2>

      <div className="form-group">
        <label>Employment Type</label>

        <select
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
        >
          <option value="">Select Employment Type</option>
          <option value="Salaried">Salaried</option>
          <option value="Self Employed">Self Employed</option>
          <option value="Business Owner">Business Owner</option>
          <option value="Student">Student</option>
          <option value="Unemployed">Unemployed</option>
        </select>

        {errors.employmentType && (
          <p className="error">{errors.employmentType}</p>
        )}
      </div>

      {formData.employmentType === "Salaried" && (
        <div className="form-group">
          <label>Company Name</label>

          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter Company Name"
          />

          {errors.companyName && (
            <p className="error">{errors.companyName}</p>
          )}
        </div>
      )}

      {(formData.employmentType === "Self Employed" ||
        formData.employmentType === "Business Owner") && (
        <div className="form-group">
          <label>Business Name</label>

          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter Business Name"
          />

          {errors.businessName && (
            <p className="error">{errors.businessName}</p>
          )}
        </div>
      )}

      {formData.employmentType !== "" &&
        formData.employmentType !== "Student" &&
        formData.employmentType !== "Unemployed" && (
          <>
            <div className="form-group">
              <label>Monthly Income (₹)</label>

              <input
                type="number"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                placeholder="Enter Monthly Income"
              />

              {errors.monthlyIncome && (
                <p className="error">{errors.monthlyIncome}</p>
              )}
            </div>

            <div className="form-group">
              <label>Work Experience (Years)</label>

              <input
                type="number"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                placeholder="Enter Work Experience"
              />

              {errors.workExperience && (
                <p className="error">{errors.workExperience}</p>
              )}
            </div>
          </>
        )}
    </div>
  );
}

export default Step5Employment;