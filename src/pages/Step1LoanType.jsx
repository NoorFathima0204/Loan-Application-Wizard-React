import { useFormData } from "../hooks/useFormData";

function Step1LoanType() {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      [name]: value,
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Step 1: Loan Type</h2>

      <div style={{ marginTop: "20px" }}>
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

        <br />
        <br />

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

        <br />
        <br />

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

      <br />

      <label>Loan Amount</label>

      <br />

      <input
        type="number"
        name="loanAmount"
        placeholder="Enter loan amount"
        value={formData.loanAmount}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />

      <br />
      <br />

      <label>Loan Tenure</label>

      <br />

      <select
        name="loanTenure"
        value={formData.loanTenure}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
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

      <br />
      <br />

      <label>Purpose of Loan</label>

      <br />

      <textarea
        name="loanPurpose"
        rows="4"
        placeholder="Why do you need this loan?"
        value={formData.loanPurpose}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />
    </div>
  );
}

export default Step1LoanType;