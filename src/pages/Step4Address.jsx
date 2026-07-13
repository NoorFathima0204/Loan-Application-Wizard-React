import { useFormData } from "../hooks/useFormData";

function Step4Address() {
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
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Address Details</h2>

      <br />

      <label>Address Line 1</label>
      <input
        type="text"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        placeholder="House No, Street"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      />

      <label>Address Line 2</label>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        placeholder="Area / Landmark"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter City"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      />

      <label>State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Enter State"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      />

      <label>Pincode</label>
      <input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
        placeholder="Enter Pincode"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
        }}
      />

      <label>Country</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Enter Country"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />
    </div>
  );
}

export default Step4Address;