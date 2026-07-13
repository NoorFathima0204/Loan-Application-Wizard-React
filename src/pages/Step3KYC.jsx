import { useFormData } from "../hooks/useFormData";

function Step3KYC() {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    updateFormData({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="step-container">
      <h2>KYC Verification</h2>

      <div className="form-group">
        <label>PAN Number</label>

        <input
          type="text"
          name="pan"
          placeholder="ABCDE1234F"
          value={formData.pan}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Aadhaar Number</label>

        <input
          type="text"
          name="aadhaar"
          placeholder="1234 5678 9012"
          value={formData.aadhaar}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />

          I authorize the bank to verify my KYC details.
        </label>
      </div>
    </div>
  );
}

export default Step3KYC;