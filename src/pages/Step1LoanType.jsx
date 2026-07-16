import { useFormHandlers } from "../hooks/useFormHandlers";

function Step1LoanType() {
  const { formData, errors, handleChange } = useFormHandlers();

  return (
    <div className="step-container">
      <h2>Step 1: Loan Type</h2>

      <div className="form-group">
        <label>Loan Type</label>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="loanType"
              value="Personal"
              checked={formData.loanType === "Personal"}
              onChange={handleChange}
            />
            Personal Loan
          </label>

          <label>
            <input
              type="radio"
              name="loanType"
              value="Home"
              checked={formData.loanType === "Home"}
              onChange={handleChange}
            />
            Home Loan
          </label>

          <label>
            <input
              type="radio"
              name="loanType"
              value="Business"
              checked={formData.loanType === "Business"}
              onChange={handleChange}
            />
            Business Loan
          </label>
        </div>

        {errors.loanType && (
          <p className="error">{errors.loanType}</p>
        )}
      </div>

      <div className="form-group">
        <label>Loan Amount</label>

        <input
          type="number"
          name="loanAmount"
          placeholder="Enter loan amount"
          value={formData.loanAmount}
          onChange={handleChange}
        />

        {errors.loanAmount && (
          <p className="error">{errors.loanAmount}</p>
        )}
      </div>

      <div className="form-group">
        <label>Loan Tenure</label>

        <select
          name="loanTenure"
          value={formData.loanTenure}
          onChange={handleChange}
        >
          <option value="">Select Tenure</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="3 Years">3 Years</option>
          <option value="5 Years">5 Years</option>
          <option value="10 Years">10 Years</option>
          <option value="15 Years">15 Years</option>
          <option value="20 Years">20 Years</option>
        </select>

        {errors.loanTenure && (
          <p className="error">{errors.loanTenure}</p>
        )}
      </div>

      <div className="form-group">
        <label>Purpose of Loan</label>

        <textarea
          name="loanPurpose"
          rows="4"
          placeholder="Why do you need this loan?"
          value={formData.loanPurpose}
          onChange={handleChange}
        />

        {errors.loanPurpose && (
          <p className="error">{errors.loanPurpose}</p>
        )}
      </div>
    </div>
  );
}

export default Step1LoanType;