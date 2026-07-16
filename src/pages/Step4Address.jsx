import { useFormHandlers } from "../hooks/useFormHandlers";

function Step4Address() {
  const { formData, errors, handleChange } = useFormHandlers();

  return (
    <div className="step-container">
      <h2>Step 4: Address Details</h2>

      <div className="form-group">
        <label>Address Line 1</label>

        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          placeholder="House No, Street"
        />

        {errors.address1 && (
          <p className="error">{errors.address1}</p>
        )}
      </div>

      <div className="form-group">
        <label>Address Line 2</label>

        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          placeholder="Area / Landmark"
        />
      </div>

      <div className="form-group">
        <label>City</label>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter City"
        />

        {errors.city && (
          <p className="error">{errors.city}</p>
        )}
      </div>

      <div className="form-group">
        <label>State</label>

        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter State"
        />

        {errors.state && (
          <p className="error">{errors.state}</p>
        )}
      </div>

      <div className="form-group">
        <label>Pincode</label>

        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Enter Pincode"
        />

        {errors.pincode && (
          <p className="error">{errors.pincode}</p>
        )}
      </div>

      <div className="form-group">
        <label>Country</label>

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter Country"
        />

        {errors.country && (
          <p className="error">{errors.country}</p>
        )}
      </div>
    </div>
  );
}

export default Step4Address;