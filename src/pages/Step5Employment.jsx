import { useFormData } from "../hooks/useFormData";

function Step5Employment() {
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
      <h2>Employment Details</h2>

      <br />

      <label>Employment Type</label>

      <select
        name="employmentType"
        value={formData.employmentType}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "20px",
        }}
      >
        <option value="">Select Employment Type</option>
        <option value="Salaried">Salaried</option>
        <option value="Self Employed">Self Employed</option>
        <option value="Business Owner">Business Owner</option>
        <option value="Student">Student</option>
        <option value="Unemployed">Unemployed</option>
      </select>

      {formData.employmentType === "Salaried" && (
        <>
          <label>Company Name</label>

          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter Company Name"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
          />
        </>
      )}

      {(formData.employmentType === "Self Employed" ||
        formData.employmentType === "Business Owner") && (
        <>
          <label>Business Name</label>

          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter Business Name"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
          />
        </>
      )}

      {formData.employmentType !== "" &&
        formData.employmentType !== "Student" &&
        formData.employmentType !== "Unemployed" && (
          <>
            <label>Monthly Income (₹)</label>

            <input
              type="number"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              placeholder="Enter Monthly Income"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                marginBottom: "20px",
              }}
            />

            <label>Work Experience (Years)</label>

            <input
              type="number"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              placeholder="Enter Work Experience"
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

export default Step5Employment;