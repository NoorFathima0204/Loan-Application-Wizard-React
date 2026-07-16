import { useFormHandlers } from "../hooks/useFormHandlers";

function Step3KYC() {
  const { formData, errors, handleChange } = useFormHandlers();

  return (
    <div className="step-container">
      <h2>Step 3: KYC Verification</h2>

      <div className="form-group">
        <label>PAN Number</label>

        <input
          type="text"
          name="pan"
          placeholder="ABCDE1234F"
          value={formData.pan}
          onChange={handleChange}
        />

        {errors.pan && (
          <p className="error">{errors.pan}</p>
        )}
      </div>

      <div className="form-group">
        <label>Aadhaar Number</label>

        <input
          type="text"
          name="aadhaar"
          placeholder="123456789012"
          value={formData.aadhaar}
          onChange={handleChange}
        />

        {errors.aadhaar && (
          <p className="error">{errors.aadhaar}</p>
        )}
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />{" "}
          I authorize the bank to verify my KYC details.
        </label>

        {errors.consent && (
          <p className="error">{errors.consent}</p>
        )}
      </div>
    </div>
  );
}

export default Step3KYC;