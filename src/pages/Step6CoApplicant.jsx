import { useFormData } from "../hooks/useFormData";

function Step6CoApplicant() {
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
      <h2>Co-Applicant Details</h2>

      <br />

      <label>Do you have a Co-Applicant?</label>

      <br />
      <br />

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

      <br />
      <br />

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

      <br />
      <br />

      {formData.hasCoApplicant === "Yes" && (
        <>
          <label>Co-Applicant Name</label>

          <input
            type="text"
            name="coApplicantName"
            value={formData.coApplicantName}
            onChange={handleChange}
            placeholder="Enter Name"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          />

          <label>Relationship</label>

          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="Father / Mother / Spouse / Sibling"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          />

          <label>Mobile Number</label>

          <input
            type="tel"
            name="coApplicantMobile"
            value={formData.coApplicantMobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          />

          <label>Annual Income (₹)</label>

          <input
            type="number"
            name="coApplicantIncome"
            value={formData.coApplicantIncome}
            onChange={handleChange}
            placeholder="Enter Annual Income"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </>
      )}
    </div>
  );
}

export default Step6CoApplicant; 